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
    <Link href="#">
      <a className="hidden p-3 px-6 pt-2 text-white bg-[#DD8029] rounded-2xl hover:bg-[#F2B98E] md:block">
        {children}
      </a>
    </Link>
  )
}

export default ContactButton