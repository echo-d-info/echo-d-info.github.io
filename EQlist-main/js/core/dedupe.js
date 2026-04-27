/* ===== 重複排除 ===== */

export function dedupeQuakes(list) {
  const map = new Map();

  list.forEach(eq => {
    // 一意キー（eventId優先、なければ発生時刻）
    const key = eq.eventId || eq.originTime;

    if (!map.has(key)) {
      map.set(key, eq);
      return;
    }

    const old = map.get(key);

    /* ===== 優先ルール ===== */

    // ① 確定報を優先
    if (eq.isFinal && !old.isFinal) {
      map.set(key, eq);
      return;
    }

    // ② 新しい更新を優先
    if (eq.time > old.time) {
      map.set(key, eq);
      return;
    }

    // ③ 最大震度が大きい方を優先（保険）
    if (eq.maxScale > old.maxScale) {
      map.set(key, eq);
      return;
    }
  });

  /* ===== 配列に戻す & ソート ===== */
  return Array.from(map.values())
    .sort((a, b) => b.time - a.time);
}
