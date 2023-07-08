namespace ConstantsModule {
  export const SETTING_SHEET_NAME = '設定';
  // テーブルヘッダーの色
  export const COLOR_TABLE_HEADER = '#cfe2f3';

  // セルの位置
  export type CellPosition = {
    row: number;
    column: number;
  };
  // 天気の情報
  export type WeatherInfo = {
    infoDate: Date;
    weather: string;
    precipitationProbabilityPercent: number;
    temperature: number;
  };

  // カレンダーID入力の区分プルダウン
  export const CALENDAR_SELECT_DEFAULT = 'デフォルト';
  export const CALENDAR_SELECT_ID_INPUT = 'ID指定';
  // カレンダーID入力区分のセル位置
  export const CALENDAR_SELECT_POS: CellPosition = { row: 8, column: 3 };
  // カレンダーID直接指定のセル位置
  export const CALENDAR_ID_POS: CellPosition = { row: 8, column: 4 };

  export type LatLon = {
    lat: number;
    lon: number;
  };

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
  // 都道府県の緯度経度リスト
  export const PREFECTURE_LAT_LON_LIST = [
    { prefecture: '北海道', lat: 43.06417, lon: 141.34694 },
    { prefecture: '青森', lat: 40.82444, lon: 140.74 },
    { prefecture: '岩手', lat: 39.70361, lon: 141.1525 },
    { prefecture: '宮城', lat: 38.26889, lon: 140.87194 },
    { prefecture: '秋田', lat: 39.71861, lon: 140.1025 },
    { prefecture: '山形', lat: 38.24056, lon: 140.36333 },
    { prefecture: '福島', lat: 37.75, lon: 140.46778 },
    { prefecture: '茨城', lat: 36.34139, lon: 140.44667 },
    { prefecture: '栃木', lat: 36.56583, lon: 139.88361 },
    { prefecture: '群馬', lat: 36.39111, lon: 139.06083 },
    { prefecture: '埼玉', lat: 35.85694, lon: 139.64889 },
    { prefecture: '千葉', lat: 35.60472, lon: 140.12333 },
    { prefecture: '東京', lat: 35.68944, lon: 139.69167 },
    { prefecture: '神奈川', lat: 35.44778, lon: 139.6425 },
    { prefecture: '新潟', lat: 37.90222, lon: 139.02361 },
    { prefecture: '富山', lat: 36.69528, lon: 137.21139 },
    { prefecture: '石川', lat: 36.59444, lon: 136.62556 },
    { prefecture: '福井', lat: 36.06528, lon: 136.22194 },
    { prefecture: '山梨', lat: 35.66389, lon: 138.56833 },
    { prefecture: '長野', lat: 36.65139, lon: 138.18111 },
    { prefecture: '岐阜', lat: 35.39111, lon: 136.72222 },
    { prefecture: '静岡', lat: 34.97694, lon: 138.38306 },
    { prefecture: '愛知', lat: 35.18028, lon: 136.90667 },
    { prefecture: '三重', lat: 34.73028, lon: 136.50861 },
    { prefecture: '滋賀', lat: 35.00444, lon: 135.86833 },
    { prefecture: '京都', lat: 35.02139, lon: 135.75556 },
    { prefecture: '大阪', lat: 34.68639, lon: 135.52 },
    { prefecture: '兵庫', lat: 34.69139, lon: 135.18306 },
    { prefecture: '奈良', lat: 34.68528, lon: 135.83278 },
    { prefecture: '和歌山', lat: 34.22611, lon: 135.1675 },
    { prefecture: '鳥取', lat: 35.50361, lon: 134.23833 },
    { prefecture: '島根', lat: 35.47222, lon: 133.05056 },
    { prefecture: '岡山', lat: 34.66167, lon: 133.935 },
    { prefecture: '広島', lat: 34.39639, lon: 132.45944 },
    { prefecture: '山口', lat: 34.18583, lon: 131.47139 },
    { prefecture: '徳島', lat: 34.06583, lon: 134.55944 },
    { prefecture: '香川', lat: 34.34028, lon: 134.04333 },
    { prefecture: '愛媛', lat: 33.84167, lon: 132.76611 },
    { prefecture: '高知', lat: 33.55972, lon: 133.53111 },
    { prefecture: '福岡', lat: 33.59083, lon: 130.40194 },
    { prefecture: '佐賀', lat: 33.24944, lon: 130.29889 },
    { prefecture: '長崎', lat: 32.74472, lon: 129.87361 },
    { prefecture: '熊本', lat: 32.78972, lon: 130.74167 },
    { prefecture: '大分', lat: 33.23806, lon: 131.6125 },
    { prefecture: '宮崎', lat: 31.91111, lon: 131.42389 },
    { prefecture: '鹿児島', lat: 31.56028, lon: 130.55806 },
    { prefecture: '沖縄', lat: 26.2125, lon: 127.68111 },
  ];

  // 定期実行の時間入力位置
  export const TRIGGER_TIME_INPUT_POS: CellPosition = { row: 36, column: 3 };
  export const TRIGGER_TIME_INPUT_CHECK_POS: CellPosition = { row: 36, column: 4 };
}
