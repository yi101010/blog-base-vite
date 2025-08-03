import { useState, useEffect } from "react";
import { STORAGE_KEYS } from "@/constants";

/**
 * お気に入り状態管理フック
 * localStorage に保存・読み込みする
 */
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  // 初回読み込み時に localStorage から取得
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // 変更があれば localStorage に保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  /** お気に入りをトグルする */
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /** お気に入り状態を取得する */
  const isFavorite = (id: string) => !!favorites[id];

  return { favorites, toggleFavorite, isFavorite };
};
