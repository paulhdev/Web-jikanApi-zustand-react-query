import { useQuery } from 'react-query';
import api from '@/services/api';
import { TopMangaApi } from './types';

async function fetchTopMangas() {
  const { data: response } = await api.get<TopMangaApi>('/top/manga');

  return response?.data;
}

export default function useFetchTopMangas() {
  return useQuery('topMangas', fetchTopMangas);
}
