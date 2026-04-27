/* ===== Wolfx API取得 ===== */

const API_URL = "https://api.wolfx.jp/jma_eqlist.json";

export async function fetchQuakes() {
  const res = await fetch(API_URL, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("API取得失敗");
  }

  const json = await res.json();

  let data;

  // ① すでに配列
  if (Array.isArray(json)) {
    data = json;

  // ② listに入ってる場合
  } else if (Array.isArray(json.list)) {
    data = json.list;

  // ③ オブジェクト形式（今回ここ）
  } else if (typeof json === "object") {
    data = Object.values(json);

  } else {
    console.error("取得データ:", json);
    throw new Error("データ形式異常");
  }

  return data;
}
