/* ===== Wolfx API取得 ===== */

const API_URL = "https://api.wolfx.jp/jma_eqlist.json";

/* ===== 取得処理 ===== */
export async function fetchQuakes() {
  const res = await fetch(API_URL, {
    cache: "no-store" // キャッシュ防止（重要）
  });

  if (!res.ok) {
    throw new Error("API取得失敗");
  }

  const data = await res.json();

  // 安全チェック
  if (!Array.isArray(data)) {
    throw new Error("データ形式異常");
  }

  return data;
}
