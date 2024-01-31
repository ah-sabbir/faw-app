'use client'
import { Suspense } from 'react'
import NextNProgress from 'nextjs-progressbar';


const CulturesPage = () => {
  return (
    <div className='w-screen h-[50vh]'>
      <NextNProgress color="#618264" height={3} />
        <Suspense fallback={<div className='w-screen h-[50vh]'>Loading...</div>}>
          <h1>this is culture CulturesPage</h1>
        </Suspense>
    </div>
  );
};


export default CulturesPage;
