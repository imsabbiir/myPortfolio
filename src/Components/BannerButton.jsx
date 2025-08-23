'use client'
import React from "react";
import { useRouter } from "next/navigation";
function BannerButton({ title, address }) {
      const route = useRouter()
  return (
    <button
      className="py-3 px-5 activeBg text-[#20202a] text-[11px] cursor-pointer font-semibold"
      onClick={() => route.push(`/${address}`)}
    >
      {title}
    </button>
  );
}

export default BannerButton;
