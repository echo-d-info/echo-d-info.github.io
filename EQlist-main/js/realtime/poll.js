/* ===== ポーリング（定期取得） ===== */

let timer = null;

/* ===== 開始 ===== */
export function startPolling(callback, interval = 5000) {
  // 二重起動防止
  if (timer) return;

  timer = setInterval(async () => {
    try {
      await callback();
    } catch (e) {
      console.error("Polling error:", e);
    }
  }, interval);
}

/* ===== 停止（必要なら） ===== */
export function stopPolling() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}
