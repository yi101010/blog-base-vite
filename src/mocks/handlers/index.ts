import { RequestHandler } from "msw";
import { articlesHandlers } from "./articles.handler";

export const handlers: RequestHandler[] = [...articlesHandlers];
