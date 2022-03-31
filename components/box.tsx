import React from "react"


const Box: React.FunctionComponent = ({children}) => {
  return (
    <div className="flex p-4 m-1 bg-green-400 rounded-md">
      <div>{children}</div>
    </div>
  )
}

export default Box