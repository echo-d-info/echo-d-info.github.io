/* ===== 内部状態 ===== */

let state = [];

/* ===== 取得 ===== */
export function getState() {
  return state;
}

/* ===== 更新 ===== */
export function setState(newState) {
  state = newState;
}

/* ===== 初期化（必要なら） ===== */
export function clearState() {
  state = [];
}
