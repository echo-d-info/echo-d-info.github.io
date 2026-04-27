import { getMaxRows } from "./layout.js";
import { createLatest, createRow } from "./components.js";

/* ===== 描画処理 ===== */

export function render(list, newItems = []) {
  if (!list || list.length === 0) return;

  const latest = list[0];
  const others = list.slice(1);

  const maxRows = getMaxRows();

  // 表示制限（最新1件 + 過去）
  const displayList = others.slice(0, maxRows);

  // 新着ID
  const newIds = new Set(newItems.map(e => e.id));

  renderLatest(latest, newIds.has(latest.id));
  renderList(displayList, newIds);
}

/* ===== 最新描画 ===== */

function renderLatest(eq, isNew) {
  const el = document.getElementById("latest");

  el.innerHTML = createLatest(eq, isNew);
}

/* ===== リスト描画 ===== */

function renderList(list, newIds) {
  const el = document.getElementById("list");

  el.innerHTML = list.map(eq => {
    return createRow(eq, newIds.has(eq.id));
  }).join("");
}
