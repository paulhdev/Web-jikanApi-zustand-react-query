import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  favorites: number[];
  showOnlyFavorites: boolean;
  toggleFavoriteManga: (id: number) => void;
};

export const useFavoriteMangas = create(
  persist<State>(
    (set, get) =>
      ({
        favorites: [],
        showOnlyFavorites: false,
        toggleFavoriteManga: (id: number) => {
          const favorites = get().favorites;
          const shouldFavorite = !favorites.includes(id);

          if (shouldFavorite) {
            useFavoriteMangas.setState({ favorites: [...favorites, id] });
          } else {
            useFavoriteMangas.setState({
              favorites: favorites.filter((mangaId) => mangaId !== id),
            });
          }
        },
      } as State),
    {
      name: 'useFavoriteMangas',
    }
  )
);
