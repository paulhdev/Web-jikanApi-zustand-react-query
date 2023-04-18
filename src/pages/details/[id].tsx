
import { useRouter } from "next/router";

import HeaderDetails from "@/components/HeaderDetails";
import useFetchMangaId from "@/services/requests/useFetchMangaId";
import Loader from "@/components/Loader";

export default function Details() {

  const router = useRouter();
  const { id } = router.query;

  const { data } = useFetchMangaId(Number(id));

  if (!data) {
    return (
      <main
        className="w-full h-screen flex items-center justify-center"
      >
        <Loader />
      </main>
    )
  }

  return (
    <main
      className="max-w-7xl w-full mx-auto pb-10"
    >

      <HeaderDetails data={data} />

      <section
        className="max-w-7xl w-full flex flex-row flex-wrap items-start justify-between p-2"
      >

        <img
          src={data?.images.jpg.large_image_url}
          alt={data?.title}
          className='border-4 border-white rounded-sm mb-6'
        />

        <div
          className="max-w-3xl w-full"
        >

          <h3 className="text-2xl mb-2">Information:</h3>
          <div
            className="w-full flex flex-row flex-wrap items-center space-x-4 mb-10"
          >
            <p
              className="bg-[#D53053]/75 p-1 rounded-sm mb-2 md:mb-0"
            >Score: {data?.score}</p>
            <p
              className="bg-[#D53053]/75 p-1 rounded-sm mb-2 md:mb-0"
            >Chapters: {data?.chapters}</p>
            <p
              className="bg-[#D53053]/75 p-1 rounded-sm mb-2 md:mb-0"
            >Volumes: {data?.volumes}</p>
            <p
              className="bg-[#D53053]/75 p-1 rounded-sm mb-2 md:mb-0"
            >Published: {data?.published.string}</p>
          </div>

          <h3 className="text-2xl mb-2">Synopsis:</h3>
          <p className="w-full">{data?.synopsis}</p>

        </div>

      </section>

    </main>
  )
}
