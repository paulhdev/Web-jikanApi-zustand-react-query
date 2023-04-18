import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'

import { useFavoriteMangas } from "@/store/useFavoriteMangas";

import { MangaId } from '@/services/requests/useFetchMangaId/types';
import Link from 'next/link';

type HeaderDetailsData = {
  data: MangaId;
};

export default function HeaderDetails({ data }: HeaderDetailsData) {

  const { toggleFavoriteManga, favorites } = useFavoriteMangas();

  return (
    <header
      className="w-full bg-[#D53053] p-4 rounded-b-md mb-10 flex flex-wrap items-center flex-row justify-between"
    >
      <h2 className="font-semibold text-xl">
        {data.title}
      </h2>
      <div
        className='flex flex-row flex-wrap items-center'
      >
        <Link
          href='/'
          className='bg-black/25 p-2 rounded-md mr-2'
        >
          Go back
        </Link>
        {
          favorites.includes(data.mal_id) ?
            <button
              onClick={() => toggleFavoriteManga(data.mal_id)}
              className='hover:scale-105 transition-all delay-150'
            >
              <HeartSolid className='h-6 w-6 text-white' />
            </button>
            :
            <button
              onClick={() => toggleFavoriteManga(data.mal_id)}
              className='hover:scale-105 transition-all delay-150'
            >
              <HeartIcon className='h-6 w-6 text-white' />
            </button>
        }
      </div>
    </header>
  );

};
