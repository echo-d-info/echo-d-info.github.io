/* ===== フィルタ処理 ===== */

export function filterQuakes(data) {
  return data.filter(eq => {

    /* ===== 震源地が存在 ===== */
    if (!eq.location || eq.location === "不明") return false;

    /* ===== マグニチュード有効 ===== */
    if (eq.magnitude === null || eq.magnitude === undefined) return false;

    /* ===== 最大震度あり ===== */
    if (eq.shindo === null || eq.shindo === undefined) return false;

    return true;
  });
}
