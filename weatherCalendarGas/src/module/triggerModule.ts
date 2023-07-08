namespace TriggerModule {
  // 入力欄のバリデーション（エラーの場合はエラーメッセージを返す）
  export const validationTriggerRegister = (): string | undefined => {
    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return 'シートの設定に誤りがあります。';
    }

    const timeInputCheckCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.TRIGGER_TIME_INPUT_CHECK_POS.row,
      ConstantsModule.TRIGGER_TIME_INPUT_CHECK_POS.column,
    );

    if (!timeInputCheckCell.getValue()) {
      return '定期実行の時間入力に不備があります。';
    }
    const validateErrorMessage = RegisterModule.validationInput();
    return validateErrorMessage;
  };

  // トリガーの登録
  export const registerTrigger = (): string | undefined => {
    const triggerName = 'execRegisterWeatherInfoToSchedule';

    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return 'シートの設定に誤りがあります。';
    }

    // 実行する時間を取得
    const timeInputCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.TRIGGER_TIME_INPUT_POS.row,
      ConstantsModule.TRIGGER_TIME_INPUT_POS.column,
    );
    const timeInputValues = timeInputCell.getValue().split(':');
    const hour = parseInt(timeInputValues[0]);
    const minute = parseInt(timeInputValues[1]);
    if (Number.isNaN(hour) || Number.isNaN(minute)) {
      return '定期実行の時間入力に不備があります。';
    }

    // 事前にトリガーを削除
    var triggers = ScriptApp.getProjectTriggers();
    triggers.forEach(function (trigger) {
      if (trigger.getHandlerFunction() == triggerName) {
        ScriptApp.deleteTrigger(trigger);
      }
    });

    // トリガー作成
    ScriptApp.newTrigger(triggerName)
      .timeBased()
      .everyDays(1)
      .atHour(hour)
      .nearMinute(minute)
      .create();
    return undefined;
  };
}
