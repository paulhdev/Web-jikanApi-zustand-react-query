import { useQuery } from 'react-query';
import api from '@/services/api';

import { MangaIdApi } from './types';

async function fetchMangaId(id: number) {
  const { data: response } = await api.get<MangaIdApi>(`/manga/${id}`);

  return response?.data;
}

export default function useFetchMangaId(id: number) {
  return useQuery('mangaId', () => fetchMangaId(id));
}
