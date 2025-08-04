import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useArticlesLatest } from "./get-articles-latest.hook";

describe("useArticlesLatest hook", () => {
    it("fetches and returns latest articles", async () => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <QueryClientProvider client={queryClient} > {children} </QueryClientProvider>
        );

        const { result } = renderHook(() => useArticlesLatest(), { wrapper });

        await waitFor(() =>
            expect(result.current.data?.[0].title).toBe("Mock Latest Article")
        );
    });
});
