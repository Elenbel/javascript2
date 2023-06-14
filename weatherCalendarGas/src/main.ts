// セル変更時に実行される関数
function onEdit(e: any) {
  const changeCell = SheetUtilModule.getChangeCell(e);
  if (changeCell) {
    console.log(changeCell);
  }
}
