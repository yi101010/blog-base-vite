/**
 * 利用可能なブレークポイントの種類
 * MUIのデフォルト breakpoints: xs, sm, md, lg, xl
 * 及び up/down 判定用のショートカット
 */
export type BreakpointFlags = {
  /** 0〜599px のとき true */
  isXs: boolean;
  /** 600〜899px のとき true */
  isSm: boolean;
  /** 900〜1199px のとき true */
  isMd: boolean;
  /** 1200〜1535px のとき true */
  isLg: boolean;
  /** 1536px 以上のとき true */
  isXl: boolean;

  /** 〜899px のとき true（モバイル〜小型タブレット想定） */
  isSmallDown: boolean;
  /** 900px 以上のとき true（中型デバイス以上） */
  isMediumUp: boolean;
  /** 1200px 以上のとき true（大型デバイス以上） */
  isLargeUp: boolean;
};
