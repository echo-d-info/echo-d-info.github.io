/* ===== 重複排除 ===== */

export function dedupeQuakes(list) {
  const map = new Map();

  list.forEach(eq => {
    // 一意キー（EventID優先）
    const key = eq.EventID || eq.time_full || eq.time;

    if (!map.has(key)) {
      map.set(key, eq);
      return;
    }

    const old = map.get(key);

    /* ===== 優先ルール ===== */
    // 基本的にWolfx APIは確定報のみだが、もし重複があれば新しい方を優先
    if (eq.time_full > old.time_full) {
      map.set(key, eq);
    }
  });

  /* ===== 配列に戻す & ソート ===== */
  // time_full (YYYY/MM/DD HH:mm:ss) で降順ソート
  return Array.from(map.values())
    .sort((a, b) => {
      if (b.time_full > a.time_full) return 1;
      if (b.time_full < a.time_full) return -1;
      return 0;
    });
}
