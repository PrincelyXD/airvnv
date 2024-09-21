import { useOutletContext } from "react-router-dom"

const Pricing = () => {
    const [van] = useOutletContext()
  return (
    <p className=" text-[30px] font-medium py-5">
      ${van.price}.00<span className="text-[18px] font-normal ">/day</span>
    </p>
  )
}

export default Pricing
