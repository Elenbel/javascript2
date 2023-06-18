namespace SheetUtilModule {
  // 変更対象のセルを取得
  export const getChangeCellPos = (e: any): ConstantsModule.CellPosition | undefined => {
    if (e.source.getSheetName() === ConstantsModule.SETTING_SHEET_NAME) {
      return { row: e.range.getRow(), column: e.range.getColumn() };
    }
    return undefined;
  };

  // セル変更時の処理
  export const handleChangeCell = (e: any) => {
    const changePos = SheetUtilModule.getChangeCellPos(e);
    if (changePos) {
      const changeCellValue = e.value;
      // カレンダーID入力の区分変更
      if (
        changePos.row === ConstantsModule.CALENDAR_SELECT_POS.row &&
        changePos.column === ConstantsModule.CALENDAR_SELECT_POS.column
      ) {
        CalendarUtilModule.onChangeCalendarCategory(e, changeCellValue);
        return;
      }
      // デフォルト地域の区分変更
      if (
        changePos.row === ConstantsModule.LOCATION_SELECT_POS.row &&
        changePos.column === ConstantsModule.LOCATION_SELECT_POS.column
      ) {
        LocationUtilModule.onChangeLocationSelect(e, changeCellValue);
        return;
      }
    }
  };

  // 入力欄セルの初期化処理
  export const clearInputCell = (
    headerCell: GoogleAppsScript.Spreadsheet.Range,
    valueCell: GoogleAppsScript.Spreadsheet.Range,
  ) => {
    headerCell.setValue(null);
    headerCell.setBackground('white');
    headerCell.setBorder(false, null, false, false, false, false);
    valueCell.setValue(null);
    valueCell.setBackground('white');
    valueCell.setBorder(false, null, false, false, false, false);
  };
}
