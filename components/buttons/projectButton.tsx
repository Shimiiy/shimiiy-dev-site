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
    <Link href="#">
      <a className="hidden p-3 px-6 pt-2 text-white bg-[#4C4C64] rounded-2xl hover:bg-[#8585AB] md:block">
        {children}
      </a>
    </Link>
  )
}

export default ProjectButton