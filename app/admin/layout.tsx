"use client";

import SideBar from "@/components/admin/side-bar";
import TopBar from "@/components/admin/top-bar";
import Provider from "@/providers/sessionProvider";

import { Fragment, useEffect, useState } from "react";


export default function DashboardLayout({ children }:any) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <Provider>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <SideBar showNav={showNav} />
      <main
        className={`bg-black pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
      </Provider>
    </>
  );
}