# 概要

マイドライブにあるファイルの権限や、権限が付与されているユーザを出力します。

# 使い方

- スプレッドシートを[こちら](https://docs.google.com/spreadsheets/d/1DRklcMLhFbQqzpL-p_H6Ln9UQTfH4eFiaL6xPFwmyZ4/edit#gid=0)から自分のマイドライブへコピーしてください。

- スプレッドシート編集とマイドライブアクセス権限を、付与してください。コピーした後にスプレッドシートを再起動しないと、権限付与ダイアログが表示されないかも。出力時にエラーが発生する場合は、権限が付与されていない可能性があります。

- 入力画面でマイドライブ全体を対象にするか、フォルダ指定（特定のフォルダ配下）を対象にするか選択してください。フォルダ指定の場合はフォルダ ID を入力してください。フォルダ ID の確認方法は[スプレッドシート・フォルダの ID 確認方法](http://amehal.blogspot.com/2015/10/id.html)の記事を参照ください。

- 出力ボタンを押すと以下のイメージのような出力シートを出力します。パス名・権限内容・権限付与された編集者・権限付与された閲覧者を出力します。権限内容の詳細については[こちら](https://developers.google.com/apps-script/reference/drive/access)を参照してください。

# License

The myDriveAuthListOutput is licensed under the MIT License.
