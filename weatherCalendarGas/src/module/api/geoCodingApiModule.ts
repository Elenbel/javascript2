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
      lon: location.lon,
    };
  };
}
