'use client'
import { Suspense } from 'react'

import dynamic from "next/dynamic";

// const WorldMap = dynamic(() => import("../../components/worldMap/Map.tsx"), { ssr: false });

const DynamicMap = dynamic(() => import("../../components/worldMap/Map"), { ssr: false });

const CulturesPage = () => {
  return (
    <div className='w-screen h-[50vh]'>
      <Suspense fallback={<div className='w-screen h-[50vh]'>Loading...</div>}>
        <DynamicMap />
      </Suspense>
    </div>
  );
};


export default CulturesPage;
