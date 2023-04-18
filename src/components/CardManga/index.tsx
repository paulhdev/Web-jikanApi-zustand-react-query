import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'

import { useFavoriteMangas } from '@/store/useFavoriteMangas';

import { TopManga } from "@/services/requests/useFetchTopMangas/types";

type MangaProps = {
  data: TopManga;
};

export default function CardManga({ data }: MangaProps) {

  const { favorites, toggleFavoriteManga } = useFavoriteMangas();

  return (

    <article
      className="max-w-[16rem] w-full min-h-[26rem] flex flex-col items-center justify-center bg-black/40 rounded-md p-3"
    >
      <img
        src={data.images.jpg.image_url}
        alt={data.title}
        className="max-w-[14rem] w-full max-h-[20rem] h-full border-2 border-white rounded-sm mb-4"
      />
      <div
        className='w-full flex flex-row flex-wrap items-center justify-between'
      >
        <p>
          {
            data.title.length >= 20 ? `${data.title.slice(0, 20)}...` : data.title
          }
        </p>
        {
          favorites.includes(data.mal_id) ?
            <button
              onClick={() => toggleFavoriteManga(data.mal_id)}
              className='hover:scale-105 transition-all delay-150'
            >
              <HeartSolid className='h-6 w-6 text-[#D53053]' />
            </button>
            :
            <button
              onClick={() => toggleFavoriteManga(data.mal_id)}
              data-testid={`Toggle-Favorite-Button-${data.mal_id}`}
              className='hover:scale-105 transition-all delay-150'
            >
              <HeartIcon className='h-6 w-6 text-[#D53053]' />
            </button>
        }
      </div>
    </article>

  );

};
