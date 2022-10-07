import { MouseEventHandler } from "react"

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  controls: string;
  label: string;
}

const Hamburger: React.FC<Props> = ({open, controls, label, onClick}) => {
  return (
    <div></div>
  )
}

export default Hamburger