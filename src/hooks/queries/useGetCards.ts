import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Cards } from '@/types/cards';

const getCards = async ({ pageParam }: { pageParam: number }) => {
  const res = await axios.get<Cards>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cards?page=${pageParam}`);
  return res.data.cards;
};

export const useGetCards = () => {
  const { data: cards } = useInfiniteQuery({
    queryKey: ['cards'],
    queryFn: (pageParam) => getCards(pageParam),
    initialPageParam: 0,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
      lastPageParam + 1;
    },
  });
  return { cards };
};
