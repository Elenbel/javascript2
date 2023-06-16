namespace ConstantsModule {
  export const SETTING_SHEET_NAME = '設定';
  // テーブルヘッダーの色
  export const COLOR_TABLE_HEADER = '#cfe2f3';

  export type CellPosition = {
    row: number;
    column: number;
  };

  // カレンダーID入力の区分プルダウン
  export const CALENDAR_SELECT_DEFAULT = 'デフォルト';
  export const CALENDAR_SELECT_ID_INPUT = 'ID指定';
  // カレンダーID入力区分のセル位置
  export const CALENDAR_SELECT_POS: CellPosition = { row: 8, column: 3 };
  // カレンダーID直接指定のセル位置
  export const CALENDAR_ID_POS: CellPosition = { row: 8, column: 4 };

  // デフォルト地域設定の区分プルダウン
  export const LOCATION_SELECT_PREFECTURE = '都道府県選択';
  export const LOCATION_SELECT_INPUT = '緯度・経度入力';
  // デフォルト地域設定の区分セル位置
  export const LOCATION_SELECT_POS: CellPosition = { row: 16, column: 3 };
  // デフォルト地域の都道府県選択のセル位置
  export const PREFECTURE_SELECT_POS: CellPosition = { row: 16, column: 4 };
  // デフォルト地域の緯度入力のセル位置
  export const LAT_INPUT_POS: CellPosition = { row: 16, column: 4 };
  // デフォルト地域の経度入力のセル位置
  export const LON_INPUT_POS: CellPosition = { row: 16, column: 5 };
}
