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
      <a className="hidden p-3 px-6 pt-2 text-[#4C4C64] bg-[#EACF6C] rounded-2xl hover:bg-[#EBD88E] md:block">
        {children}
      </a>
    </Link>
  )
}

export default ProjectButton