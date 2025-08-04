import { server } from "./server";

// テスト前にサーバー起動
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// 各テスト後にハンドラーをリセット
afterEach(() => server.resetHandlers());

// テスト終了後にサーバー停止
afterAll(() => server.close());
