import { useOutletContext } from "react-router-dom"

const Details = () => {
  const [van] = useOutletContext()

  return (
    <div>
      <p className="text-[16px] text-chinese-black pb-5"><span className=" font-semibold">Name:</span> {van.name}</p>
      <p className="text-[16px] text-chinese-black pb-5"><span className=" font-semibold">Category:</span> {van.type}</p>
      <p className="text-[16px] text-chinese-black leading-7 pb-5"><span className=" font-semibold">Description:</span> {van.description}</p>
      <p className="text-[16px] text-chinese-black pb-5"><span className=" font-semibold">Visibility:</span> {van.visibility}</p>
    </div>
  )
}

export default Details
