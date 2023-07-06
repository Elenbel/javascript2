namespace CalendarApiModule {
  // カレンダーオブジェクトの取得
  export const getCalendarObject = (): GoogleAppsScript.Calendar.Calendar | undefined => {
    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return undefined;
    }
    const selectCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.CALENDAR_SELECT_POS.row,
      ConstantsModule.CALENDAR_SELECT_POS.column,
    );
    if (selectCell.getValue() == ConstantsModule.CALENDAR_SELECT_DEFAULT) {
      return CalendarApp.getDefaultCalendar();
    }

    const idCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.CALENDAR_ID_POS.row,
      ConstantsModule.CALENDAR_ID_POS.column,
    );
    return CalendarApp.getCalendarById(idCell.getValue());
  };

  // 現在日時含めて6日間のスケジュールを取得
  export const getCalendarSchedules = (): GoogleAppsScript.Calendar.CalendarEvent[] | undefined => {
    const calendar = CalendarApiModule.getCalendarObject();
    if (!calendar) {
      return undefined;
    }

    // 現在日付
    const nowDate = new Date();
    // 5日後の終わりの日時
    const after5DayDate = new Date();
    after5DayDate.setDate(nowDate.getDate() + 5);
    after5DayDate.setHours(23);
    after5DayDate.setMinutes(59);
    after5DayDate.setSeconds(59);

    return calendar.getEvents(nowDate, after5DayDate);
  };

  // 天気情報をカレンダーの予定に登録
  export const registerWeatherInfoToScheduleDescription = (
    schedule: GoogleAppsScript.Calendar.CalendarEvent,
    weatherInfoList: ConstantsModule.WeatherInfo[],
  ) => {
    // 予定の日時
    const startTime = schedule.getStartTime();
    const endTime = schedule.getEndTime();
    // 天気の取得
    const startTimeWeather = WeatherApiModule.getNearlyTimeWeather(
      startTime.getTime(),
      weatherInfoList,
    );
    const endTimeWeather = WeatherApiModule.getNearlyTimeWeather(
      endTime.getTime(),
      weatherInfoList,
    );

    // 予定の説明欄
    let description = schedule.getDescription();
    // 既に天気情報があった場合は削除
    const weatherDescPosition = description.indexOf('＜天気情報＞');
    if (weatherDescPosition > -1) {
      description = description.substring(0, weatherDescPosition);
    }
    // 改行コードで終わってなければ付与
    if (!description.endsWith('\n')) {
      description = description + '\n';
    }

    // 天気情報を追記
    description = description + '＜天気情報＞\n\n';
    description =
      description +
      `【開始日時の天気】\n${WeatherApiModule.getDescriptionFromWeatherInfo(startTimeWeather)}\n\n`;
    description =
      description +
      `【終了日時の天気】\n${WeatherApiModule.getDescriptionFromWeatherInfo(endTimeWeather)}\n\n`;

    // 予定を更新
    schedule.setDescription(description);
  };
}
