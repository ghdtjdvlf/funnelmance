"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";


export function WobbleCard1() {
  return (
    <div className="WobbleCard1-container grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            퍼널먼스 업력
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            “2018년에 설립되어 꾸준한 성장을 이어온 저희 회사는, 현재 7년 차에
            접어들며 안정적인 기반과 풍부한 경험을 바탕으로 한층 더 도약하고
            있습니다.”
          </p>
        </div>
        <img
          src="https://cdn.imweb.me/thumbnail/20250908/268f087dfcab5.jpg"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[1%] grayscale filter -bottom-3 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          직원 규모
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          “전문성과 열정을 지닌 약 60명의 직원이 한 팀이 되어 다양한 프로젝트를
          수행하고 있습니다.”
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            매출 규모/성장률
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            “현재 연 매출 50억 원을 넘어서며, 해마다 200% 이상의 성장을 기록하는
            가파른 성장 곡선을 그리고 있습니다.”
          </p>
        </div>
        <img 
          src="https://cdn.imweb.me/thumbnail/20250909/f11b5a05252ea.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="grow absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-cover rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

export function Sparkles() {
  return (
    <div
      className="h-[60rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1
        className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Funnelmance
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default Sparkles 


