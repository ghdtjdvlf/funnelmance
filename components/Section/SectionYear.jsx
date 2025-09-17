import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { WobbleCard } from "../ui/WobbleCard";

export function SectionYear() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            연 매출 50억 원을 돌파하며, 온라인 마케팅 캠페인 ROI가 전년 대비
            220% 성장하였습니다. 퍼포먼스 마케팅과 브랜드 캠페인의 균형 전략이
            주효했습니다.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cdn.imweb.me/thumbnail/20240719/b330c6b1b823f.jpg"
              alt="성과 이미지1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://cdn.imweb.me/thumbnail/20240719/d4f56b1a3be9f.jpg"
              alt="성과 이미지2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://cdn.imweb.me/thumbnail/20240719/64df40f59adb9.jpg"
              alt="성과 이미지3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://ecimg.cafe24img.com/pg1710b95308820089/udit1/web/product/big/20250826/10972799e1c7651f31706c94267dfd56.jpg"
              alt="성과 이미지4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            데이터 기반 퍼포먼스 마케팅을 강화하여 신규 고객 유입이 180% 증가,
            월 매출이 2배 이상 성장했습니다.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            특히 소셜미디어 광고와 인플루언서 협업을 통해 브랜드 인지도와
            전환율을 동시에 끌어올린 시기였습니다.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://ecimg.cafe24img.com/pg1710b95308820089/udit1/web/product/extra/big/20250423/cb6ccaec3d8246e760d59f10ec1af520.jpg"
              alt="캠페인 이미지1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://ecimg.cafe24img.com/pg1710b95308820089/udit1/web/product/extra/big/20250821/d65a13060c7728349410d4aaffab43f1.png"
              alt="캠페인 이미지2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://ecimg.cafe24img.com/pg1710b95308820089/udit1/web/product/extra/big/20250821/d65a13060c7728349410d4aaffab43f1.png"
              alt="캠페인 이미지3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="캠페인 이미지4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            신규 마케팅 채널 확장과 프로모션 런칭을 통해 매출 성과를
            구체적으로 개선했습니다.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ 신규 CRM 도입으로 재구매율 35% 상승
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ 해외 광고 캠페인 런칭 → 수출 매출 5억 원 달성
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ 대형 프로모션 이벤트 → 월간 거래액 3배 성장
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ 신규 고객 세그먼트 마케팅 → LTV(고객 생애가치) 150% 증가
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="성과 이미지1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="성과 이미지2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="성과 이미지3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="성과 이미지4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default SectionYear;
