"use client";

import Provider from "@/providers/sessionProvider";

import { Fragment, useEffect, useState } from "react";


export default function DashboardLayout({ children }:any) {

  useEffect(() => {

  }, []);

  return (
    <>
    <Provider>
      <main
        className={`bg-black pt-16 transition-all duration-[400ms] `}>
        <div className="px-4 md:px-16">{children}</div>
      </main>
      </Provider>
    </>
  );
}