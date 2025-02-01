import errorImg from "../../assets/images/page-not-found.png"
import { Link } from "react-router-dom"
const PageNotFound = () => {
  return (
    <div className="w-full h-[450px] flex  flex-col items-center bg-body-cream p-[30px]">
     <img className="h-[200px]" src={errorImg} alt="" />
     <p>Sorry the page you were looking for was not found😬.</p>

      <Link to='/' className=" mt-[30px] w-full button-button font-bold text-white  bg-chinese-black py-[12px] rounded-md text-center"> Return to home </Link>

    </div>
  )
}

export default PageNotFound
