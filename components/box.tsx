import React from "react"

type Props = {
  text: string
}

const Box = ({ text }: Props) => {
  return (
    <div className="flex p-4 m-1 bg-green-400 rounded-md">
      <p>{ text }</p>
    </div>
  )
}

export default Box