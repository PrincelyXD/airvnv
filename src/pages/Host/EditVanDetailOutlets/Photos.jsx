import { useOutletContext } from "react-router-dom"

const Photos = () => {
    const [van] = useOutletContext()
  return (
 
    <div className=" w-[100px] h-[100px] flex my-5">
      <img src={`${van.imageUrl}`} alt={`image of the ${van.name} van`} className=" rounded-lg" />
    </div>

  )
}

export default Photos
