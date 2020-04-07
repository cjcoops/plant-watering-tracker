import Plant1 from "../public/plant1.svg"
import Plant2 from "../public/plant2.svg"
import Plant3 from "../public/plant3.svg"
import Plant4 from "../public/plant4.svg"

const icons = [
  <Plant1 className="h-10" />,
  <Plant2 className="h-10" />,
  <Plant3 className="h-10" />,
  <Plant4 className="h-10" />
]

const getIcon = index => icons[index]

const SvgIcon = ({ index }) => <div>{getIcon(index)}</div>

export default SvgIcon
