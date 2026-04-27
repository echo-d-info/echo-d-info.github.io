/* ===== フィルタ処理 ===== */

export function filterQuakes(data) {
  return data.filter(eq => {

    /* ===== 確定報のみ ===== */
    if (!eq.isFinal) return false;

    /* ===== 震源地が存在 ===== */
    if (!eq.hypocenter || !eq.hypocenter.name) return false;

    /* ===== マグニチュード有効 ===== */
    if (eq.magnitude === null || eq.magnitude <= 0) return false;

    /* ===== 最大震度あり ===== */
    if (eq.maxScale === null || eq.maxScale === undefined) return false;

    return true;
  });
}
