"use client";

import { useEffect } from "react";

import KTComponent from "@/src/metronic/core";
import { usePathname } from "next/navigation";

export default function GlobalInit() {
  const pathname = usePathname();

  useEffect(() => {
    KTComponent.init();
  }, [pathname]);

  return <></>;
}
