import { debounce } from 'lodash-es';
import { ReactNode, useState } from 'react';
import CardItem from '@/components/card/CardItem';
import HomeLayout from '@/components/layout/HomeLayout';
import SEO from '@/components/SEO/SEO';
import { useGetCards } from '@/hooks/queries/useGetCards';
import type { CardType } from '@/types/cards';

export default function Home() {
  const [query, setQuery] = useState('');
  const { cards } = useGetCards(query);

  return (
    <div>
      <SEO description={`트친들의 명함을 둘러보세요🐥`} />
      <main className="flex flex-col gap-5 mx-1 mb-16">
        <label className="input flex items-center gap-2">
          <input
            type="search"
            className="grow bg-white"
            placeholder="닉네임 혹은 아이디 찾기"
            onChange={debounce((e) => setQuery(e.target.value), 300)}
          />
        </label>
        {cards?.map((card: CardType) => <CardItem card={card} key={card.id} />)}
      </main>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => <HomeLayout>{page}</HomeLayout>;
