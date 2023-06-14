// 変更対象のセルを取得
namespace SheetUtilModule {
  export const getChangeCell = (e: any) => {
    if (e.source.getSheetName() === '設定') {
      return { row: e.range.getRow(), column: e.range.getColumn() };
    }
    return undefined;
  };
}
