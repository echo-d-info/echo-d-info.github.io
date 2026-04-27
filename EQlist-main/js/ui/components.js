import { getIntensityClass } from "../utils/color.js";

/* ===== 最新カード ===== */
export function createLatest(eq, isNew = false) {
  const iClass = getIntensityClass(eq.scale);

  return `
    <div class="card ${isNew ? "new highlight" : ""}">
      
      <div class="intensity ${iClass}">
        ${eq.scaleText}
      </div>

      <div class="info">
        <div class="name">${eq.location}</div>
        <div class="time-info">${eq.timeFull}</div>
        <div class="detail-info">
          <span>M ${eq.mag}</span>
          <span>深さ: ${eq.depth}</span>
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
        <div class="name">${eq.location}</div>
        <div class="time-info">${eq.timeFull}</div>
      </div>

      <div class="mag-info">
        M ${eq.mag}
      </div>

    </div>
  `;
}
