/* ===== 差分検出 ===== */

export function getDiff(oldList, newList) {
  // 前回のIDセット
  const oldIds = new Set(oldList.map(e => e.id));

  const diff = [];

  newList.forEach(eq => {
    if (!oldIds.has(eq.id)) {
      diff.push(eq);
    }
  });

  return diff;
}
