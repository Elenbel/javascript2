namespace LocationUtilModule {
  // デフォルト地域の設定区分変更
  export const onChangeLocationSelect = (e: any, inputValue: string) => {
    const sheet = e.source.getActiveSheet();
    // 都道府県の場合は都道府県選択を表示
    if (inputValue === ConstantsModule.LOCATION_SELECT_PREFECTURE) {
      return;
    }
    // 緯度・経度の場合は入力欄を表示
    if (inputValue === ConstantsModule.LOCATION_SELECT_INPUT) {
      return;
    }
  };
}
