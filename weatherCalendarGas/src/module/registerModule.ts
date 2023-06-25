namespace RegisterModule {
  // 入力欄のバリデーション（エラーの場合はエラーメッセージを返す）
  export const validationInput = (): string | undefined => {
    const calendarError = CalendarSettingModule.validateCalendarInput();
    if (calendarError) {
      return calendarError;
    }

    const locationError = LocationSettingModule.validateLocationInput();
    if (locationError) {
      return locationError;
    }

    return undefined;
  };

  // 即時登録処理
  export const registerNow = () => {
    // カレンダーのスケジュールリストを取得
    const calendarSchedules = CalendarApiModule.getCalendarSchedules();
    if (!calendarSchedules) {
      return 'カレンダーが取得できませんでした。';
    }

    if (calendarSchedules.length > 0) {
      // 地名と緯度・経度を管理するMap

      console.log(calendarSchedules.map((c) => c.getTitle()));
    }

    return undefined;
  };
}
