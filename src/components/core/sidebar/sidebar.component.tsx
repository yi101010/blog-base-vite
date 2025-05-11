import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment, memo } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  recentPosts?: { id: string; title: string }[];
  popularPosts?: { id: string; title: string }[];
  popularTags?: string[];
}

const mockRecentPosts = [
  { id: "1", title: "【速報】React 19 発表" },
  { id: "2", title: "Vite が速い理由とは" },
  { id: "3", title: "TypeScript 型の基本" },
];

const mockPopularPosts = [
  { id: "10", title: "JavaScript トリビア10選" },
  { id: "11", title: "Node.jsの実践テクニック" },
  { id: "12", title: "Next.js vs Remix 徹底比較" },
];

const mockPopularTags = ["React", "TypeScript", "Vite", "MUI", "Node.js"];

export const Sidebar = memo(({ recentPosts, popularPosts, popularTags }: SidebarProps) => {
  recentPosts = mockRecentPosts;
  popularPosts = mockPopularPosts;
  popularTags = mockPopularTags;
  return (
    <>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>最近の投稿</Typography>
        <Stack spacing={1}>
          {recentPosts?.map((post, index) => (
            <Fragment key={post.id}>
              <Button
                component={Link}
                to={`/post/${post.id}`}
                color="info"
                sx={{ justifyContent: "flex-start" }}
              >
                {post.title}
              </Button>
              {index !== recentPosts.length - 1 && <Divider />}
            </Fragment>
          ))}
        </Stack>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>人気記事</Typography>
        <Stack spacing={1}>
          {popularPosts?.map((post, index) => (
            <Fragment key={post.id}>
              <Button
                component={Link}
                to={`/post/${post.id}`}
                color="info"
                sx={{ justifyContent: "flex-start" }}
              >
                {post.title}
              </Button>
              {index !== popularPosts.length - 1 && <Divider />}
            </Fragment>
          ))}
        </Stack>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>人気タグ</Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {popularTags?.map((tag, i) => (
            <Chip
              key={`${tag}-${i}`}
              label={`#${tag}`}
              component={Link}
              to={`/tags/${tag}`}
              clickable
            />
          ))}
        </Box>
      </Box>
    </>
  );
});
