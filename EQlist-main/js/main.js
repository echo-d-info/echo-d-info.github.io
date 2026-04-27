import { fetchQuakes } from "./api/wolfx.js";

import { filterQuakes } from "./core/filter.js";
import { dedupeQuakes } from "./core/dedupe.js";
import { normalizeQuakes } from "./core/normalize.js";

import { getDiff } from "./realtime/diff.js";
import { startPolling } from "./realtime/poll.js";

import { render } from "./ui/render.js";
import { getState, setState } from "./state.js";

import { UPDATE_INTERVAL } from "./config.js";

let lastFetchTime = 0;

/* ===== 初回起動 ===== */
async function init() {
  await update();
  startPolling(update, UPDATE_INTERVAL);
}

/* ===== 更新処理 ===== */
async function update() {
  try {
    setLoading(true);

    const raw = await fetchQuakes();

    let data = filterQuakes(raw);
    data = dedupeQuakes(data);
    data = normalizeQuakes(data);

    const oldData = getState();
    const diff = getDiff(oldData, data);

    // 差分があるときだけ更新
    if (diff.length > 0 || oldData.length === 0) {
      setState(data);
      render(data, diff);
      updateTimestamp();
    }

    lastFetchTime = Date.now();

    showError(false);
    showEmpty(data.length === 0);

  } catch (e) {
    console.error(e);
    showError(true);
  } finally {
    setLoading(false);
  }
}

/* ===== UI補助 ===== */

function updateTimestamp() {
  const now = new Date();
  document.getElementById("updated").textContent =
    "最終更新: " + now.toLocaleTimeString();
}

function setLoading(flag) {
  const app = document.getElementById("app");
  if (flag) {
    app.classList.add("loading");
  } else {
    app.classList.remove("loading");
  }
}

function showError(flag) {
  document.getElementById("error").classList.toggle("hidden", !flag);
}

function showEmpty(flag) {
  document.getElementById("empty").classList.toggle("hidden", !flag);
}

/* ===== 鮮度チェック（任意） ===== */
function checkStale() {
  const now = Date.now();
  const status = document.getElementById("status");

  if (now - lastFetchTime > 60000) {
    status.textContent = "情報が古い可能性あり";
  } else {
    status.textContent = "";
  }
}

setInterval(checkStale, 10000);

/* ===== 起動 ===== */
init();

/* ===== リサイズ対応 ===== */
window.addEventListener("resize", () => {
  const data = getState();
  if (data.length > 0) {
    render(data);
  }
});
