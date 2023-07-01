namespace GeoCodingApiModule {
  // 地名から緯度・経度を取得
  export const getLatLonFromLocationName = (
    locationName: string,
  ): ConstantsModule.LatLon | undefined => {
    const res = Maps.newGeocoder().setLanguage('ja').geocode(locationName);
    if (res.results.length === 0 || !res.results[0]?.geometry?.location) {
      return undefined;
    }
    const location = res.results[0].geometry.location;
    return {
      lat: location.lat,
      lon: location.lng,
    };
  };

  // 緯度・経度のオブジェクトから格納用キーに変換
  export const getLatLonKeyFromObject = (latLon: ConstantsModule.LatLon): string => {
    return `${latLon.lat}-${latLon.lon}`;
  };
}
