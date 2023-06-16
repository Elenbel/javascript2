namespace CalendarUtilModule {
  // カレンダーのID入力区分変更
  export const onChangeCalendarCategory = (e: any, inputValue: string) => {
    const sheet = e.source.getActiveSheet();
    // 選択内容によって出しわけするセル
    const headerCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.CALENDAR_ID_POS.row - 1,
      ConstantsModule.CALENDAR_ID_POS.column,
    );
    const valueCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.CALENDAR_ID_POS.row,
      ConstantsModule.CALENDAR_ID_POS.column,
    );
    // デフォルトの場合はID入力を空白
    if (inputValue === ConstantsModule.CALENDAR_SELECT_DEFAULT) {
      headerCell.setValue('');
      headerCell.setBackground('white');
      headerCell.setBorder(false, null, false, false, false, false);
      valueCell.setValue('');
      valueCell.setBackground('white');
      valueCell.setBorder(false, null, false, false, false, false);
      return;
    }
    // ID指定の場合は入力欄を作成
    if (inputValue === ConstantsModule.CALENDAR_SELECT_ID_INPUT) {
      headerCell.setValue('カレンダーID');
      headerCell.setBackground(ConstantsModule.COLOR_TABLE_HEADER);
      headerCell.setBorder(true, true, true, true, false, false);
      valueCell.setValue('');
      valueCell.setBackground('white');
      valueCell.setBorder(true, true, true, true, false, false);
      return;
    }
  };
}
