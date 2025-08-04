/**
 * @file server.ts
 * @description MSWサーバーインスタンス
 */

import { setupServer } from "msw/node";
import { articlesHandlers } from "./handlers/articles.handler";

export const server = setupServer(...articlesHandlers);
