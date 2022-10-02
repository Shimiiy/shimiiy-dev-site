import React from "react"


const Box: React.FunctionComponent = ({children}) => {
  return (
    <div className="flex flex-col p-8 bg-white rounded-md md:flex-row">
      <div className="flex flex-col md:flex-row">{children}</div>
    </div>
  )
}

export default Box