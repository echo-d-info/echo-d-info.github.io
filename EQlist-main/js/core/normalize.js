/* ===== 正規化処理 ===== */

export function normalizeQuakes(list) {
  return list.map(eq => {

    const scale = normalizeScale(eq.shindo);

    return {
      id: eq.EventID || eq.time_full,

      time: eq.time,
      timeFull: eq.time_full,
      location: normalizeName(eq.location),

      mag: normalizeMag(eq.magnitude),
      depth: normalizeDepth(eq.depth),
      
      lat: eq.latitude,
      lng: eq.longitude,

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
  if (!m || m <= 0 || m === "不明") return "不明";
  return Number(m).toFixed(1);
}

/* ===== 深さ ===== */

function normalizeDepth(d) {
  if (!d || d === "不明") return "不明";
  if (String(d).includes("km")) return d;
  return d + "km";
}
