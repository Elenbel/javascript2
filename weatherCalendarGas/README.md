# 概要

天気の情報を Google Calendar の説明欄に追記するスクリプトです。  
設定により定期的に更新することもできます。  

<img width="734" alt="スクリーンショット 2023-07-10 1 18 46" src="https://github.com/someone7140/javascript/assets/33390784/802bff35-4b19-4c07-8e45-3d27316550d0">
      
カレンダーには以下のようなイメージで登録されます。  
<img width="440" alt="スクリーンショット 2023-07-10 1 17 47" src="https://github.com/someone7140/javascript/assets/33390784/1e8f188a-849e-4f64-87e6-e57c6d028e79">

# 使い方など

- スプレッドシートを[こちら](https://docs.google.com/spreadsheets/d/1hXbJAmQRm_lsXRtLjXrHA1GhZau4NX1mpwQcF2ZNKH8)から自分のマイドライブへコピーしてください。

- コピー後に即時で天気を追加したい場合は「即時実行」、定期的に追加したい場合は「定期実行登録」のボタンを押してください。

- 初回にボタンを押した場合は、スクリプトへの権限付与ダイアログが表示されます。権限付与した後に再度ボタンを押してください。

- 天気情報の取得には、[Open-Meteo](https://open-meteo.com/)という無料で天気情報を取得する API を使用しています。（すみません、正確性については保証できないです・・）

# License

The weatherCalendar is licensed under the MIT License.
