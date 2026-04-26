import Link from "next/link";
import React from "react";
function BannerButton({ title, address }) {
  return (
    <Link href={`/${address}`}
      className="py-3 px-5 activeBg text-[#20202a] text-[11px] cursor-pointer font-semibold"
    >
      {title}
    </Link>
  );
}

export default BannerButton;
