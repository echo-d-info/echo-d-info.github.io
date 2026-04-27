import { LAYOUT, MAX_ITEMS } from "../config.js";

/* ===== 表示可能行数を計算 ===== */

export function getMaxRows() {
  const vh = window.innerHeight;

  // CSSと同じ比率（必ず一致させる）
  const latestHeight = vh * LAYOUT.latestRatio;
  const rowHeight = vh * LAYOUT.rowRatio;

  // 表示可能行数
  let rows = Math.floor((vh - latestHeight) / rowHeight);

  /* ===== 安全補正 ===== */

  // 最低表示数
  if (rows < 1) rows = 1;

  // 最大制限（APIの取得件数に合わせる）
  if (rows > MAX_ITEMS) rows = MAX_ITEMS;

  return rows;
}
