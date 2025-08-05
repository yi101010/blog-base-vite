import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const renderApp = () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
};

if (import.meta.env.DEV) {
  import("./mocks/browser")
    .then(({ worker }) => worker.start())
    .then(renderApp);
} else {
  renderApp();
}
