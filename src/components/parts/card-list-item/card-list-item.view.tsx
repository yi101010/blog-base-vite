import { Box, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FolderIcon from "@mui/icons-material/Folder";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { BaseCard, BaseCardContent } from "@/components";

const DEFAULT_IMAGE_URL = "https://picsum.photos/400/300?random=1";

export type CardListItemProps = {
  imageUrl?: string;
  title: string;
  categoryName?: string;
  publishedAt: string;
  commentCount?: number;
  isFavorite?: boolean;
  onClickFavorite?: () => void;
};

export const CardListItem = ({
  imageUrl,
  title,
  categoryName,
  publishedAt,
  commentCount = 0,
  isFavorite = false,
  onClickFavorite,
}: CardListItemProps) => {
  return (
    <BaseCard
      variant="outlined"
      sx={{ flexDirection: "row", height: { xs: 60, sm: 120 } }}
    >
      <CardMedia
        component="img"
        alt="thumbnail"
        image={imageUrl || DEFAULT_IMAGE_URL}
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
            {categoryName && (
              <Chip
                icon={<FolderIcon />}
                label={categoryName}
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
            <IconButton
              size="small"
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

            <IconButton
              size="small"
              onClick={onClickFavorite}
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
