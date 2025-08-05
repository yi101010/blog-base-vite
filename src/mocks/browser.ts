import { setupWorker } from "msw";
import { handlers } from "./handlers";

// Service Workerをセットアップ
export const worker = setupWorker(...handlers);
