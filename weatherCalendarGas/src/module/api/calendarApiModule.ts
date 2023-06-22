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
}
