namespace LocationSettingModule {
  // デフォルト地域選択の初期プルダウンを設定
  export const setLocationSelectPulldown = () => {
    const sheet = SheetUtilModule.getSettingSheet();
    if (sheet) {
      // デフォルト地域選択の区分プルダウンを作成
      const locationCategoryRule = SpreadsheetApp.newDataValidation()
        .requireValueInList([
          ConstantsModule.LOCATION_SELECT_PREFECTURE,
          ConstantsModule.LOCATION_SELECT_INPUT,
        ])
        .build();
      const locationCategoryCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
        ConstantsModule.LOCATION_SELECT_POS.row,
        ConstantsModule.LOCATION_SELECT_POS.column,
      );
      locationCategoryCell.setDataValidation(locationCategoryRule);
    }
  };

  // デフォルト地域の設定区分変更
  export const onChangeLocationSelect = (e: any, inputValue: string) => {
    const sheet = e.source.getActiveSheet();
    // 緯度のセル
    const headerLatCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LAT_INPUT_POS.row - 1,
      ConstantsModule.LAT_INPUT_POS.column,
    );
    const valueLatCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LAT_INPUT_POS.row,
      ConstantsModule.LAT_INPUT_POS.column,
    );
    // 経度のセル
    const headerLonCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LON_INPUT_POS.row - 1,
      ConstantsModule.LON_INPUT_POS.column,
    );
    const valueLonCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LON_INPUT_POS.row,
      ConstantsModule.LON_INPUT_POS.column,
    );
    // 都道府県選択のセル
    const headerPrefectureCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.PREFECTURE_SELECT_POS.row - 1,
      ConstantsModule.PREFECTURE_SELECT_POS.column,
    );
    const valuePrefectureCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.PREFECTURE_SELECT_POS.row,
      ConstantsModule.PREFECTURE_SELECT_POS.column,
    );

    // 都道府県の場合は都道府県選択を表示
    if (inputValue === ConstantsModule.LOCATION_SELECT_PREFECTURE) {
      // 緯度・経度のセルをクリア
      SheetUtilModule.clearInputCell(headerLatCell, valueLatCell);
      SheetUtilModule.clearInputCell(headerLonCell, valueLonCell);
      // 都道府県のプルダウンをセット
      headerPrefectureCell.setValue('都道府県選択');
      headerPrefectureCell.setBackground(ConstantsModule.COLOR_TABLE_HEADER);
      headerPrefectureCell.setBorder(true, true, true, true, false, false);
      valuePrefectureCell.setValue('東京');
      valuePrefectureCell.setBackground('white');
      valuePrefectureCell.setBorder(true, true, true, true, false, false);
      const prefectureRule = SpreadsheetApp.newDataValidation()
        .requireValueInList(
          ConstantsModule.PREFECTURE_LAT_LON_LIST.map((prefecture) => prefecture.prefecture),
        )
        .build();
      valuePrefectureCell.setDataValidation(prefectureRule);
      return;
    }
    // 緯度・経度の場合は入力欄を表示
    if (inputValue === ConstantsModule.LOCATION_SELECT_INPUT) {
      // 都道府県のセルをクリア
      SheetUtilModule.clearInputCell(headerPrefectureCell, valuePrefectureCell);
      // 緯度・経度の入力欄をセット
      headerLatCell.setValue('緯度');
      headerLatCell.setBackground(ConstantsModule.COLOR_TABLE_HEADER);
      headerLatCell.setBorder(true, true, true, true, false, false);
      valueLatCell.setValue(null);
      valueLatCell.setBackground('white');
      valueLatCell.setBorder(true, true, true, true, false, false);
      valueLatCell.setDataValidation(null);
      headerLonCell.setValue('経度');
      headerLonCell.setBackground(ConstantsModule.COLOR_TABLE_HEADER);
      headerLonCell.setBorder(true, true, true, true, false, false);
      valueLonCell.setValue(null);
      valueLonCell.setBackground('white');
      valueLonCell.setBorder(true, true, true, true, false, false);
      return;
    }
  };

  // 緯度と経度のオブジェクトをセルから取得
  export const getLocationLatLon = (): ConstantsModule.LatLon | undefined => {
    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return undefined;
    }

    // 緯度の値
    const latCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LAT_INPUT_POS.row,
      ConstantsModule.LAT_INPUT_POS.column,
    );
    const latValue = parseFloat(latCell.getValue());
    // 経度の値
    const lonCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LON_INPUT_POS.row,
      ConstantsModule.LON_INPUT_POS.column,
    );
    const lonValue = parseFloat(lonCell.getValue());

    if (isNaN(latValue) || isNaN(lonValue)) {
      return undefined;
    }
    return {
      lat: latValue,
      lon: lonValue,
    };
  };

  // 地域設定の入力チェック
  export const validateLocationInput = (): string | undefined => {
    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return 'シートの設定に誤りがあります。';
    }
    const selectCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LOCATION_SELECT_POS.row,
      ConstantsModule.LOCATION_SELECT_POS.column,
    );
    if (selectCell.getValue() == ConstantsModule.LOCATION_SELECT_PREFECTURE) {
      const prefectureCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
        ConstantsModule.PREFECTURE_SELECT_POS.row,
        ConstantsModule.PREFECTURE_SELECT_POS.column,
      );
      const prefectureValue = ConstantsModule.PREFECTURE_LAT_LON_LIST.find(
        (p) => p.prefecture == prefectureCell.getValue(),
      );
      if (!prefectureValue) {
        return '都道府県を選択をしてください。';
      }
      return undefined;
    } else if (selectCell.getValue() == ConstantsModule.LOCATION_SELECT_INPUT) {
      const latLon = LocationSettingModule.getLocationLatLon();
      if (!latLon) {
        return '緯度・経度を入力してください。';
      }
      return undefined;
    }

    return 'デフォルト地域設定の区分を選択してください。';
  };

  // デフォルト地域設定の緯度・経度取得
  export const getDefaultLatLon = (): ConstantsModule.LatLon | undefined => {
    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return undefined;
    }
    const selectCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
      ConstantsModule.LOCATION_SELECT_POS.row,
      ConstantsModule.LOCATION_SELECT_POS.column,
    );
    if (selectCell.getValue() == ConstantsModule.LOCATION_SELECT_PREFECTURE) {
      const prefectureCell: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
        ConstantsModule.PREFECTURE_SELECT_POS.row,
        ConstantsModule.PREFECTURE_SELECT_POS.column,
      );
      const prefectureValue = ConstantsModule.PREFECTURE_LAT_LON_LIST.find(
        (p) => p.prefecture == prefectureCell.getValue(),
      );
      if (!prefectureValue) {
        return undefined;
      }
      return {
        lat: prefectureValue.lat,
        lon: prefectureValue.lon,
      };
    } else if (selectCell.getValue() == ConstantsModule.LOCATION_SELECT_INPUT) {
      return LocationSettingModule.getLocationLatLon();
    }

    return undefined;
  };
}
