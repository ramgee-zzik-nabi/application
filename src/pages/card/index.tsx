import Image from 'next/image';
import { ReactNode } from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import SEO from '@/components/SEO/SEO';

const Page = () => {
  return (
    <>
      <SEO title="명함 선택" description="명함을 선택해보세요." />
      <div className="flex flex-col justify-center items-center gap-20 h-[90vh]">
        <Image src="/images/empty.png" alt="우주선" width={150} height={150} />
        <h1 className="text-xl font-bold">홈에서 명함을 선택해 보세요! 👩‍🚀</h1>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactNode) {
  return <LayoutWithHeader>{page}</LayoutWithHeader>;
};

export default Page;
