'use client'

import dynamic from "next/dynamic";

// const WorldMap = dynamic(() => import("../../components/worldMap/Map.tsx"), { ssr: false });

const DynamicMap = dynamic(() => import("../../components/worldMap/Map"), { ssr: false });

import Map from "@/components/worldMap/Map.tsx";

const CulturesPage = () => {
  return (
    <div className='w-screen h-1/2'>
      <DynamicMap/>
    </div>
  );
};


export default CulturesPage;
