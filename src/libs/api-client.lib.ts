import axios from "axios";

/**
 * Axios 共通クライアント
 * - baseURL: ルートパス（相対URL対応）
 * - timeout: タイムアウト（ms）
 * - ヘッダー: JSON取得前提
 */
export const apiClient = axios.create({
  baseURL: "/", // 静的JSONは public/ 配下から取得
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// レスポンス共通処理
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[ERROR][API]", error);
    return Promise.reject(error);
  }
);
