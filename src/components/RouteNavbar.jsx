"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const RouteNavbar = () => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/add-destination") {
    return null;
  }

  return <Navbar />;
};

export default RouteNavbar;
