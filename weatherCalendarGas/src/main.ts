// ファイル起動時に実行される関数
function onOpen(e: any) {
  // プルダウンの初期設定
  CalendarSettingModule.setCalendarSelectPulldown();
  LocationSettingModule.setLocationSelectPulldown();
}

// セル変更時に実行される関数
function onEdit(e: any) {
  SheetUtilModule.handleChangeCell(e);
}

// 即時実行時に実行される関数
function execNow() {
  SheetUtilModule.displayDialog('処理中です。少々お待ちください・・・。');

  // 入力のバリデーション
  const validateErrorMessage = RegisterModule.validationInput();
  if (validateErrorMessage) {
    SheetUtilModule.displayDialog(validateErrorMessage);
    return;
  }
  // 登録処理
  const registerErrorMessage = RegisterModule.registerNow();
  if (registerErrorMessage) {
    SheetUtilModule.displayDialog(registerErrorMessage);
    return;
  }

  SheetUtilModule.displayDialog('処理完了しました。');
}
