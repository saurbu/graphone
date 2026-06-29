"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isDashboard =
    pathname.startsWith("/company") ||
    pathname.startsWith("/news") ||
    pathname.startsWith("/products");

  return (
    <div className="flex min-h-screen">

      {isDashboard && <Sidebar />}

      <div className={isDashboard ? "ml-[92px] w-full" : "w-full"}>
        
        {!isDashboard && <Navbar />}

        <main>{children}</main>

        {!isDashboard && <Footer />}
      </div>

    </div>
  );
}