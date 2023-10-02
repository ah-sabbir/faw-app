'use client'
import { Suspense } from 'react'
import NextNProgress from 'nextjs-progressbar';

import dynamic from "next/dynamic";

// const WorldMap = dynamic(() => import("../../components/worldMap/Map.tsx"), { ssr: false });

const DynamicMap = dynamic(() => import("../../components/worldMap/Map"), { ssr: false });

const CulturesPage = () => {
  return (
    <div className='w-screen h-[50vh]'>
	<NextNProgress color="#618264" height={3} />
      <Suspense fallback={<div className='w-screen h-[50vh]'>Loading...</div>}>
        <DynamicMap />
      </Suspense>
    </div>
  );
};


export default CulturesPage;
