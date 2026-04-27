/* ===== マグニチュード表示 ===== */
export function formatMag(mag) {
  if (!mag || mag === "不明") return "M--.-";
  return `M${mag}`;
}

/* ===== 深さ表示 ===== */
export function formatDepth(depth) {
  if (!depth || depth === "不明") return "深さ --km";
  return `深さ ${depth}`;
}

/* ===== 震度表示（保険） ===== */
export function formatScaleText(scaleText) {
  if (!scaleText) return "--";
  return scaleText;
}
