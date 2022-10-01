import React from "react";
import Link from "next/link"

interface Props {
  // color: string;
  text: string;
  linkAddress: string;
}

const Button: React.FC<Props> = ({
  // color,
  text,
  linkAddress
}) => {
  return (
    <div className="hidden p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-orange-300 md:block">
      <Link href={linkAddress}>
        {text}
      </Link>
    </div>
  )
}

export default Button