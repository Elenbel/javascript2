namespace RegisterModule {
  // 入力欄のバリデーション（エラーの場合はエラーメッセージを返す）
  export const validationInput = (): string | undefined => {
    const calendarError = CalendarSettingModule.validateCalendarInput();
    if (calendarError) {
      return calendarError;
    }

    return undefined;
  };

  // 即時登録処理
  export const registerNow = () => {
    // セルの入力内容を取得
  };
}
