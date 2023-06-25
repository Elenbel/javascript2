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
}
