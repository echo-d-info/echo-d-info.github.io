/* ===== 震度 → CSSクラス変換 ===== */

export function getIntensityClass(scale) {
  if (!scale) return "i0";

  // 文字列として処理
  const s = String(scale);

  switch (s) {
    case "1": return "i1";
    case "2": return "i2";
    case "3": return "i3";
    case "4": return "i4";

    case "5-": return "i5m"; // 5弱
    case "5+": return "i5p"; // 5強

    case "6-": return "i6m"; // 6弱
    case "6+": return "i6p"; // 6強

    case "7": return "i7";

    default:
      return "i1"; // フォールバック（安全側）
  }
}
