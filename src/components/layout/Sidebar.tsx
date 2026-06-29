"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "@/assets/logos/image.png";
import { navigation } from "@/data/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = navigation.filter((item) => item.showInSidebar);

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[230px] border-r border-gray-200 bg-white flex flex-col">

      <div className="flex h-20 items-center gap-3 px-6 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="GraphOne"
            className="h-9 w-9 rounded-full"
          />

          <span className="text-lg font-bold tracking-tight">
            GraphOne
          </span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">

        {menu.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-rose-50 text-rose-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {item.icon && (
                <item.icon className="h-5 w-5 mr-3" />
              )}

              <span>{item.name}</span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}