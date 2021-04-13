// 権限一覧出力ボタンのクリック
function onOutputButtonClick() {
  let folder = undefined;
  let folderId = undefined;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("入力");
  // マイドライブから出力対象フォルダを取得
  if (sheet.getRange("B3").getValue() == "マイドライブ全体") {
    folder = DriveApp.getRootFolder();
  }
  if (sheet.getRange("B3").getValue() == "フォルダ指定") {
    // 入力されたフォルダIDを指定
    folderId = sheet.getRange("B6").getValue();
    folder = DriveApp.getFolderById(folderId);
  }

  if (folder) {
    // シートの作成
    const addSheet = addOutputSheet(ss, folder.getName(), folderId);
    // 配下のフォルダとファイルの出力
    outputFolderAndFileInfo(folder, addSheet, 5, "");
  }
}

// 編集時
function onEdit(e) {
  // 入力シートの「対象」セル
  if (
    e.range.getSheet().getSheetName() == "入力" &&
    e.range.getRow() == 3 &&
    e.range.getColumn() == 2
  ) {
    const activeSheet = e.range.getSheet();
    const range = activeSheet.getRange("B6");
    // フォルダ指定でない場合はフォルダIDの入力セルをグレー
    if (e.value != "フォルダ指定") {
      range.setBackground("#808080");
    } else {
      range.setBackground("#FFFFFF");
    }
  }
}

// 出力用シートの作成
function addOutputSheet(ss, folderName, folderId) {
  const addSheet = ss.insertSheet("出力" + ss.getNumSheets());
  // タイトル出力
  const titleRange = addSheet.getRange("A1");
  titleRange.setValue(folderName);
  titleRange.setFontSize(14);
  titleRange.setFontWeight("bold");
  // URL出力
  const urlRange = addSheet.getRange("A2");
  if (folderId) {
    urlRange.setValue("https://drive.google.com/drive/folders/" + folderId);
  } else {
    urlRange.setValue("https://drive.google.com/drive/my-drive");
  }
  // 列出力
  const pathRange = addSheet.getRange("B4");
  pathRange.setValue("パス・ファイル名");
  pathRange.setFontWeight("bold");
  const shareRange = addSheet.getRange("C4");
  shareRange.setValue("公開範囲");
  shareRange.setFontWeight("bold");
  const editorRange = addSheet.getRange("D4");
  editorRange.setValue("指定されたeditor");
  editorRange.setFontWeight("bold");
  const viewerRange = addSheet.getRange("E4");
  viewerRange.setValue("指定されたviewer");
  viewerRange.setFontWeight("bold");
  return addSheet;
}
