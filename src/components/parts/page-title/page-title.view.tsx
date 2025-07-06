import { Typography } from "@mui/material";
import { memo, ReactNode } from "react";

/**
 * ページタイトル用の共通コンポーネント。
 * 主にページのH1として使用し、子要素としてタイトルテキストを渡す。
 *
 * @example
 * <PageTitle>About My Site</PageTitle>
 */
type PageTitleProps = {
    children: ReactNode;
};

export const PageTitle = memo(({ children }: PageTitleProps) => {
    return (
        <Typography
            variant="h1"
            sx={{ fontSize: 26 }}
            gutterBottom
        >
            {children}
        </Typography>
    );
});
