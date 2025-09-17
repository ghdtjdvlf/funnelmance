"use client";

import React, { useCallback } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { section03Cards } from "@/data/Section03.data";
import { WobbleCard } from "../ui/WobbleCard";

export function Section03() {
  return (
    <div className="pt-[100px] inter-var max-w-[1440px] grid grid-cols-1 gap-x-20 gap-y-0 mx-auto sm:grid-cols-2 lg:grid-cols-3 ">
      {section03Cards.map((card) => (
        <CardContainer key={card.id}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            {/* 이미지 */}
            {card.imageUrl && (
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  width="1000"
                  height="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  loading="lazy"
                />
              </CardItem>
            )}

            {/* 설명 */}
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 pt-5"
            >
              {card.description}
            </CardItem>

            {/* 출시일 */}
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 pb-3"
            >
              {card.release}
            </CardItem>

            {/* 제목 */}
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <span className="whitespace-pre-line">{card.title}</span>
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>


  );
}





export default Section03;