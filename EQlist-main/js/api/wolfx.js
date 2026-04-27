/* ===== Wolfx API取得 ===== */

const API_URL = "https://api.wolfx.jp/jma_eqlist.json";

/* ===== 取得処理 ===== */
export async function fetchQuakes() {
  const res = await fetch(API_URL, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("API取得失敗");
  }

  const json = await res.json();

  // ▼ ここが重要（配列 or オブジェクト両対応）
  const data = Array.isArray(json) ? json : json.list;

  // デバッグ用（最初だけ確認推奨）
  if (!data) {
    console.error("取得データ（生）:", json);
  }

  if (!Array.isArray(data)) {
    throw new Error("データ形式異常");
  }

  return data;
}
