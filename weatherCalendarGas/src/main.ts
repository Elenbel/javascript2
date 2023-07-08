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
  const registerErrorMessage = execRegisterWeatherInfoToSchedule();
  if (registerErrorMessage) {
    SheetUtilModule.displayDialog(registerErrorMessage);
    return;
  }

  SheetUtilModule.displayDialog('処理完了しました。');
}

// スケジュールに天気を登録
function execRegisterWeatherInfoToSchedule() {
  return RegisterModule.registerNow();
}

// 定期実行登録時に実行される関数
function execTriggerRegister() {
  SheetUtilModule.displayDialog('処理中です。少々お待ちください・・・。');

  // 入力のバリデーション
  const validateErrorMessage = TriggerModule.validationTriggerRegister();
  if (validateErrorMessage) {
    SheetUtilModule.displayDialog(validateErrorMessage);
    return;
  }

  // 定期実行登録処理
  const registerErrorMessage = TriggerModule.registerTrigger();
  if (registerErrorMessage) {
    SheetUtilModule.displayDialog(registerErrorMessage);
    return;
  }

  SheetUtilModule.displayDialog('処理完了しました。');
}
