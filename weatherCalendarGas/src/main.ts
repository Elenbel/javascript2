// ファイル起動時に実行される関数
function onOpen(e: any) {
  // プルダウンの初期設定
  SheetUtilModule.setPulldown(e);
}

// セル変更時に実行される関数
function onEdit(e: any) {
  SheetUtilModule.handleChangeCell(e);
}
