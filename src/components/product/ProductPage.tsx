"use client";

import ProductNavbar from "./ProductNavbar";
import ProductHero from "./ProductHero";
import ProductCollection from "./ProductCollection";
import ProductFeed from "./ProductFeed";
import ProductRightSidebar from "./ProductRightSidebar";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <ProductNavbar />

      <main className="ml-[45px]">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">

            <div className="space-y-8">

              <ProductHero />

              <ProductCollection />

              <ProductFeed />

            </div>

            <ProductRightSidebar />

          </div>

        </div>
      </main>
    </div>
  );
}