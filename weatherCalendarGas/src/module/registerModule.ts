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
    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return 'シートの設定に誤りがあります。';
    }
    // カレンダーのスケジュールリストを取得
    const calendarSchedules = CalendarApiModule.getCalendarSchedules();
    if (!calendarSchedules) {
      return 'カレンダーが取得できませんでした。';
    }

    if (calendarSchedules.length > 0) {
      const defaultLocationSelectCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
        ConstantsModule.LOCATION_SELECT_POS.row,
        ConstantsModule.LOCATION_SELECT_POS.column,
      );
      // 地名と緯度・経度を管理するMap
      const locationLatLonMap = new Map<string, ConstantsModule.LatLon>();
      // 緯度・経度から天気情報を取得するMap
      const latLonWeatherMap = new Map<string, ConstantsModule.WeatherInfo[]>();
      calendarSchedules.forEach((schedule) => {
        // スケジュールの地名から緯度・経度を取得
        let latLon = undefined;
        const scheduleLocation = schedule.getLocation();
        if (!scheduleLocation) {
        }
      });
    }

    return undefined;
  };
}
