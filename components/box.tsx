import React from "react"


const Box: React.FunctionComponent = ({children}) => {
  return (
    <div className="p-8 bg-white rounded-md">
      <div>{children}</div>
    </div>
  )
}

export default Box