import React from "react";
import Link from "next/link"

interface Props {
  children: React.ReactNode;
  linkAddress: string;
}

const ContactButton: React.FC<Props> = ({
  children,
  linkAddress
}) => {
  return (
    <Link href={linkAddress}>
      <a className="hidden p-3 px-6 pt-2 text-white bg-orangeShim rounded-2xl hover:bg-orangeShimLighter md:block">
        {children}
      </a>
    </Link>
  )
}

export default ContactButton