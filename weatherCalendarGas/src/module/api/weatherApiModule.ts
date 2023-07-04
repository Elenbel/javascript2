namespace WeatherApiModule {
  // 緯度・経度から天気を取得
  export const getWeatherInfoListFromLatLon = (
    latLon: ConstantsModule.LatLon,
  ): ConstantsModule.WeatherInfo[] => {
    const weatherInfoList: ConstantsModule.WeatherInfo[] = [];
    const response = UrlFetchApp.fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latLon.lat}&longitude=${latLon.lon}&hourly=temperature_2m,precipitation_probability,weathercode&timezone=Asia%2FTokyo`,
    );
    if (response.getResponseCode() === 200) {
      const resultJson = JSON.parse(response.getContentText());
      const hourlyData = resultJson.hourly;
      if (hourlyData) {
        // timeのlengthをベースにする
        const hourlyDataLength = hourlyData.time.length;
        for (let i = 0; i < hourlyDataLength; i++) {
          weatherInfoList.push({
            infoDate: Utilities.parseDate(hourlyData.time[i], 'JST', "yyyy-MM-dd'T'HH:mm"),
            weather: WeatherApiModule.getWeatherNameFromCode(hourlyData.weathercode[i]),
            precipitationProbabilityPercent: parseFloat(hourlyData.precipitation_probability[i]),
            temperature: parseFloat(hourlyData.temperature_2m[i]),
          });
        }
      }
    }
    return weatherInfoList;
  };

  // 天気コードから天気名を取得
  export const getWeatherNameFromCode = (code: number): string => {
    if (code < 1) {
      return '快晴';
    } else if (code <= 10) {
      return '晴れ';
    } else if (code <= 60) {
      return '曇り';
    } else if (code <= 70) {
      return '雨';
    } else if (code <= 79) {
      return '雪';
    } else if (code <= 82) {
      return 'にわか雨';
    } else if (code <= 86) {
      return '雪';
    } else {
      return '雷雨';
    }
  };

  // 対象の日時で最も差分が少ない天気を取得
  export const getNearlyTimeWeather = (
    targetDateUnixTime: number,
    weatherInfoList: ConstantsModule.WeatherInfo[],
  ): ConstantsModule.WeatherInfo => {
    return weatherInfoList
      .map((w) => {
        return { ...w, diffAbs: Math.abs(targetDateUnixTime - w.infoDate.getTime()) };
      })
      .slice()
      .sort(function (a, b) {
        return a.diffAbs < b.diffAbs ? -1 : 1; //差分の絶対値の昇順ソート
      })[0];
  };
}
