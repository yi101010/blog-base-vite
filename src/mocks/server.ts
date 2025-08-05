/**
 * @file server.ts
 * @description MSWサーバーインスタンス
 */

import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
