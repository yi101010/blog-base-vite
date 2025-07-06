import { lazy } from "react";

export const ContactPage = lazy(() =>
  import("./contact.page").then((m) => ({ default: m.ContactPage }))
);
