import { getIntensityClass } from "../utils/color.js";
import { formatTime } from "../utils/time.js";

/* ===== 最新カード ===== */
export function createLatest(eq, isNew = false) {
  const iClass = getIntensityClass(eq.scale);

  return `
    <div class="card ${isNew ? "new highlight" : ""}">
      
      <div class="intensity ${iClass}">
        ${eq.scaleText}
      </div>

      <div class="info">
        <div class="name">${eq.name}</div>
        <div class="meta">
          ${formatTime(eq.time)}　
          M${eq.mag}　
          深さ ${eq.depth}
        </div>
      </div>

    </div>
  `;
}

/* ===== 一覧行 ===== */
export function createRow(eq, isNew = false) {
  const iClass = getIntensityClass(eq.scale);

  return `
    <div class="row ${isNew ? "new" : ""}">

      <div class="intensity ${iClass}">
        ${eq.scaleText}
      </div>

      <div class="info">
        <div class="name">${eq.name}</div>
        <div class="meta">
          ${formatTime(eq.time)}　
          M${eq.mag}
        </div>
      </div>

    </div>
  `;
}
