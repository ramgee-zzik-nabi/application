import { useRouter } from 'next/router';
import type { CardType } from '@/types/cards';

const Card = ({ card }: { card: CardType }) => {
  const router = useRouter();
  const openDetailPageHandler = () => {
    // api 변경되면 바꾸기
    // router.push(`/${card.id}`);
    router.push(`/${card.twitter}`);
  };

  return (
    // Todo: 명함 컴포넌트 만들기
    <div key={card.id} className="card bg-base-100 shadow-xl pt-8" onClick={openDetailPageHandler}>
      <div className="mx-auto w-72 h-40 bg-blue-200">명함 컴포넌트</div>
      <div className="card-body p-5">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <h2 className="card-title">{card.nickname}</h2>
            <h3 className="">{card.twitter}</h3>
          </div>
          <div className="badge badge-secondary">NEW</div>
        </div>
        {card.customFields && (
          <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
            {card.customFields[0]?.key}: {card.customFields[0]?.contents}
          </p>
        )}
        {/* TODO: 추후 updatedAt api가 추가되면 수정 예정 */}
        <time className="justify-start text-xs">마지막 업데이트: {card.updatedAt}</time>
      </div>
    </div>
  );
};

export default Card;
