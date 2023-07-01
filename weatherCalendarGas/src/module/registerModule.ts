namespace RegisterModule {
  // 入力欄のバリデーション（エラーの場合はエラーメッセージを返す）
  export const validationInput = (): string | undefined => {
    const calendarError = CalendarSettingModule.validateCalendarInput();
    if (calendarError) {
      return calendarError;
    }

    const locationError = LocationSettingModule.validateLocationInput();
    if (locationError) {
      return locationError;
    }

    return undefined;
  };

  // 即時登録処理
  export const registerNow = () => {
    const sheet = SheetUtilModule.getSettingSheet();
    if (!sheet) {
      return 'シートの設定に誤りがあります。';
    }
    // カレンダーのスケジュールリストを取得
    const calendarSchedules = CalendarApiModule.getCalendarSchedules();
    if (!calendarSchedules) {
      return 'カレンダーが取得できませんでした。';
    }

    if (calendarSchedules.length > 0) {
      const defaultLatLon = LocationSettingModule.getDefaultLatLon();
      // 地名と緯度・経度を管理するMap
      const locationLatLonMap = new Map<string, ConstantsModule.LatLon>();
      // 緯度・経度から天気情報を取得するMap
      const latLonWeatherMap = new Map<string, ConstantsModule.WeatherInfo[]>();
      calendarSchedules.forEach((schedule) => {
        // 緯度・経度を取得
        let latLon = undefined;
        const scheduleLocation = schedule.getLocation();
        if (scheduleLocation) {
          // 地名が既に緯度・経度のMapにあるか
          const latLonFromMap = locationLatLonMap.get(scheduleLocation);
          if (latLonFromMap) {
            latLon = latLonFromMap;
          } else {
            // 地名から緯度・経度をGeoCodingで取得
            const latLonFromGeoCoding =
              GeoCodingApiModule.getLatLonFromLocationName(scheduleLocation);
            if (latLonFromGeoCoding) {
              latLon = latLonFromGeoCoding;
              locationLatLonMap.set(scheduleLocation, latLon);
            }
          }
        }
        if (!latLon) {
          latLon = defaultLatLon;
        }
        if (!latLon) {
          return;
        }
        const latLonKey = GeoCodingApiModule.getLatLonKeyFromObject(latLon);

        let weatherInfoList = latLonWeatherMap.get(latLonKey);
        if (!weatherInfoList) {
          weatherInfoList = WeatherApiModule.getWeatherInfoListFromLatLon(latLon);
          latLonWeatherMap.set(latLonKey, weatherInfoList);
        }
        if (!weatherInfoList) {
          return;
        }
      });
    }

    return undefined;
  };
}
