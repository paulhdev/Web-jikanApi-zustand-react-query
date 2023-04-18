import { useFavoriteMangas } from "@/store/useFavoriteMangas";

export default function Header() {

  const { showOnlyFavorites } = useFavoriteMangas();

  const toogleShowOnlyFavorites = () => {
    useFavoriteMangas.setState({
      showOnlyFavorites: !showOnlyFavorites
    })
  };

  return (
    <header
      className="w-full bg-[#D53053] p-4 rounded-b-md mb-10 flex flex-wrap items-center flex-row justify-between"
    >
      <h1 className="font-semibold text-xl">
        InforManga
      </h1>
      <button
        onClick={toogleShowOnlyFavorites}
        className='bg-black/25 p-2 rounded-md'
      >
        Show Favorites
      </button>
    </header>
  );

};
