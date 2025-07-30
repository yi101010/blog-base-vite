import { Box, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FolderIcon from "@mui/icons-material/Folder";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { BaseCard, BaseCardContent, CardListItemProps } from "@/components";
import {
  DEFAULT_IMAGE_URL,
  generatePostCommentPath,
  generatePostPath,
} from "@/constants";

/**
 * 記事一覧用のカードコンポーネント
 *
 * @param {string} props.id - 記事の一意なID（ルーティング用）
 * @param {string} [props.imgPath] - サムネイル画像のパス（未指定の場合は DEFAULT_IMAGE_URL を使用）
 * @param {string} props.title - 記事タイトル
 * @param {string} [props.category] - カテゴリ名
 * @param {string} props.publishedAt - 公開日（文字列）
 * @param {number} [props.commentCount=0] - コメント数
 * @param {boolean} [props.isFavorite=false] - お気に入り状態
 * @param {() => void} [props.onClickFavorite] - お気に入りクリック時のコールバック
 */
export const CardListItem = (props: CardListItemProps) => {
  const {
    id,
    imgPath,
    title,
    category,
    publishedAt,
    commentCount = 0,
    isFavorite = false,
    onClickFavorite,
  } = props;

  const navigate = useNavigate();

  /** コメントページへ遷移（外枠リンクを無効化） */
  const handleClickComment = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(generatePostCommentPath(id));
  };

  /** お気に入りクリック（外枠リンクを無効化） */
  const handleClickFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClickFavorite?.();
  };

  return (
    <BaseCard
      variant="outlined"
      component={Link}
      to={generatePostPath(id)}
      sx={{
        flexDirection: "row",
        height: { xs: 60, sm: 120 },
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="thumbnail"
        image={imgPath || DEFAULT_IMAGE_URL}
        sx={{
          width: { xs: 60, sm: 120 },
          height: "100%",
          objectFit: "cover",
          borderRight: "1px solid",
          borderColor: "divider",
        }}
      />

      <BaseCardContent
        sx={{
          pl: 0,
          pr: { xs: 0.5, sm: 2 },
          pt: { xs: 0.1, sm: 0.5 },
          ml: { xs: -1.5, sm: 0 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 10, sm: 16 },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: { xs: 2, sm: 3 },
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: "auto", mb: { xs: 0.2, sm: 0.5 } }}
        >
          {/* カテゴリ・日付 */}
          <Box display="flex" gap={2} alignItems="center">
            {category && (
              <Chip
                icon={<FolderIcon />}
                label={category}
                size="small"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  width: 120,
                  "& .MuiChip-label": { fontSize: 12 },
                }}
              />
            )}

            <Box display="flex" alignItems="center" gap={0.5}>
              <ScheduleIcon
                sx={{ fontSize: { xs: 13, sm: 16 }, verticalAlign: "middle" }}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: { xs: 9, sm: 12 }, lineHeight: 1 }}
              >
                {publishedAt}
              </Typography>
            </Box>
          </Box>

          {/* コメント・お気に入り */}
          <Box display="flex" alignItems="center" gap={1} sx={{ ml: "auto" }}>
            {/* コメントボタン */}
            <IconButton
              size="small"
              onClick={handleClickComment}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                px: { xs: 0.1, sm: 0.5 },
                py: { xs: 0.35, sm: 0.6 },
                overflow: "hidden",
                width: { xs: 50, sm: 70 },
              }}
            >
              <CommentIcon sx={{ fontSize: { xs: 14, sm: 16 }, mr: 0.5 }} />
              <Box
                component="span"
                sx={{
                  fontSize: { xs: 9, sm: 12 },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {commentCount}
              </Box>
            </IconButton>

            {/* お気に入りボタン */}
            <IconButton
              size="small"
              onClick={handleClickFavorite}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                width: { xs: 21, sm: 28 },
                height: { xs: 21, sm: 28 },
                p: 0,
              }}
            >
              {isFavorite ? (
                <FavoriteIcon
                  sx={{ fontSize: { xs: 13, sm: 16 }, color: "error.main" }}
                />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: { xs: 13, sm: 16 } }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </BaseCardContent>
    </BaseCard>
  );
};
