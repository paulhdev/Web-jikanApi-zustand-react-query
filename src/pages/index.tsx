import useFetchTopMangas from "@/services/requests/useFetchTopMangas"

import Header from "@/components/Header";
import CardManga from "@/components/CardManga";
import { useFavoriteMangas } from "@/store/useFavoriteMangas";

export default function Home() {

  const { data } = useFetchTopMangas();
  const { showOnlyFavorites, favorites } = useFavoriteMangas();

  return (
    <main
      className="max-w-7xl w-full mx-auto pb-10"
    >

      <Header />

      <h2
        className="text-4xl font-semibold mb-4 text-center sm:text-left p-2"
      >
        {showOnlyFavorites ? 'Favorites' : 'Top Mangas'}
      </h2>

      <section
        className="max-w-7xl w-full flex flex-wrap flex-row items-center justify-center sm:justify-between space-x-3 space-y-4 p-2"
      >
        {
          data?.filter(manga => !showOnlyFavorites || favorites.includes(manga.mal_id)).map(manga => (
            <CardManga key={manga.mal_id} data={manga} />
          ))
        }
      </section>

    </main>
  )
}
