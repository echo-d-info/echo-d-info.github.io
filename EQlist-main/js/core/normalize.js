/* ===== 正規化処理 ===== */

export function normalizeQuakes(list) {
  return list.map(eq => {

    const scale = normalizeScale(eq.maxScale);

    return {
      id: eq.eventId || eq.originTime,

      time: eq.time || eq.originTime,
      name: normalizeName(eq.hypocenter?.name),

      mag: normalizeMag(eq.magnitude),
      depth: normalizeDepth(eq.depth),

      scale: scale,
      scaleText: formatScaleText(scale)
    };
  });
}

/* ===== 震度変換 ===== */

function normalizeScale(scale) {
  if (!scale) return "0";

  return String(scale)
    .replace("震度", "")
    .replace("弱", "-")
    .replace("強", "+");
}

/* ===== 表示用震度 ===== */

function formatScaleText(scale) {
  return scale
    .replace("-", "弱")
    .replace("+", "強");
}

/* ===== 震源名 ===== */

function normalizeName(name) {
  if (!name || name === "不明") return "震源不明";
  return name;
}

/* ===== マグニチュード ===== */

function normalizeMag(m) {
  if (!m || m <= 0) return "不明";
  return Number(m).toFixed(1);
}

/* ===== 深さ ===== */

function normalizeDepth(d) {
  if (!d || d < 0) return "不明";
  return d + "km";
}
