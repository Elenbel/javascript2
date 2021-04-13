// 配下のフォルダ・ファイル情報を出力
function outputFolderAndFileInfo(folder, outputSheet, startRow, startPath) {
  let row = startRow;
  let path = startPath;
  // ファイル一覧
  const childFiles = folder.getFiles();
  while (childFiles.hasNext()) {
    const childFile = childFiles.next();
    outputInfoToSheet(outputSheet, path, childFile, row);
    row++;
  }
  // 子フォルダ
  const childFolders = folder.getFolders();
  while (childFolders.hasNext()) {
    path = startPath;
    const childFolder = childFolders.next();
    outputInfoToSheet(outputSheet, path, childFolder, row);
    path = childFolder.getName() + "/";
    row++;
    // 子フォルダで再帰
    const result = outputFolderAndFileInfo(childFolder, outputSheet, row, path);
    row = result.row;
    path = result.path;
  }
  return { row: row, path: path };
}

// シートへの出力処理
function outputInfoToSheet(outputSheet, path, obj, row) {
  outputSheet.getRange("B" + row).setValue(path + obj.getName());
  outputSheet.getRange("C" + row).setValue(obj.getSharingAccess());
  outputSheet.getRange("D" + row).setValue(
    obj
      .getEditors()
      .filter((u) => u.getEmail())
      .map((u) => u.getEmail())
      .join(", ")
  );
  outputSheet.getRange("E" + row).setValue(
    obj
      .getViewers()
      .filter((u) => u.getEmail())
      .map((u) => u.getEmail())
      .join(", ")
  );
}
