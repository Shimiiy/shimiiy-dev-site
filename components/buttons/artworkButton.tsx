import React from "react";
import Link from "next/link"

interface Props {
  children: React.ReactNode;
  linkAddress: string;
}

const ProjectButton: React.FC<Props> = ({
  children,
  linkAddress
}) => {
  return (
    <Link href={linkAddress}>
      <a className="hidden p-3 px-6 pt-2 text-blueTintBlack bg-yellowShim rounded-2xl hover:bg-yellowShimLighter md:block">
        {children}
      </a>
    </Link>
  )
}

export default ProjectButton