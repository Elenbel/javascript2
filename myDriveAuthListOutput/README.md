# 概要

マイドライブにあるファイルの公開範囲や、権限が付与されているユーザを出力します。

# 使い方

- スプレッドシートを[こちら](https://docs.google.com/spreadsheets/d/1DRklcMLhFbQqzpL-p_H6Ln9UQTfH4eFiaL6xPFwmyZ4/edit#gid=0)から自分のマイドライブへコピーしてください。

- スプレッドシート編集とマイドライブアクセス権限を、付与してください。コピーした後にスプレッドシートを再起動しないと、権限付与ダイアログが表示されないかも。出力時にエラーが発生する場合は、権限が付与されていない可能性があります。

- 入力画面でマイドライブ全体を対象にするか、フォルダ指定（特定のフォルダ配下）を対象にするか選択してください。フォルダ指定の場合はフォルダ ID を入力してください。フォルダ ID の確認方法は[スプレッドシート・フォルダの ID 確認方法](http://amehal.blogspot.com/2015/10/id.html)の記事を参照ください。
<img width="752" alt="スクリーンショット 2021-04-13 22 03 21" src="https://user-images.githubusercontent.com/33390784/114566205-00b3f100-9cad-11eb-9e2f-adc792c646a2.png">

- 出力ボタンを押すと以下のイメージのような出力シートを出力します。パス名・公開範囲・権限付与された編集者・権限付与された閲覧者を出力します。公開範囲の詳細については[こちら](https://developers.google.com/apps-script/reference/drive/access)を参照してください。
<img width="743" alt="スクリーンショット 2021-04-13 22 16 30" src="https://user-images.githubusercontent.com/33390784/114559284-87190480-9ca6-11eb-9fd9-b9c42ca519ea.png">


# License

The myDriveAuthListOutput is licensed under the MIT License.
