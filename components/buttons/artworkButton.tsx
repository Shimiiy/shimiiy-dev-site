import React from "react";
import Link from "next/link"

interface Props {
  children: React.ReactNode;
  linkAddress: string;
}

const ArtworkButton: React.FC<Props> = ({
  children,
  linkAddress
}) => {
  return (
    <Link href={linkAddress}>
      <a className="font-bold text-center p-6 py-3 rounded-2xl text-blueTintBlack bg-yellowShim hover:bg-yellowShimLighter">
        {children}
      </a>
    </Link>
  )
}

export default ArtworkButton