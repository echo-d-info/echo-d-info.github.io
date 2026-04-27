/* ===== 時刻フォーマット ===== */

export function formatTime(timestamp) {
  if (!timestamp) return "--:--";

  const date = new Date(timestamp);

  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");

  return `${h}:${m}`;
}
