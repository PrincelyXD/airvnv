import { useLoaderData, useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { getVans } from "../../../api";


// you automatically have access to params on this loader
export function vanDetailLoader({params}){
const id = params.id
 return getVans(id)
}

function VanDetail() {
  const location = useLocation()

 const prevLinkPath = location.state?.search || ''
const vanType = location.state?.typeOfVan || 'all'
const van = useLoaderData()


  return (
    <div className="mx-[auto] h-fit w-[600px] bg-chinese-black font-inter text-black">
     
        <div className="bg-body-cream px-9 pb-16">
          <Link
            to={`..?${prevLinkPath}`}
            relative="path"
            className="text-chinese-black before:mr-1 before:text-[#161616] before:content-['<-']"
          >
            Back to <i className=" font-bold">{vanType}</i> vans
          </Link>

          <div
            className="my-11 flex h-[450px] w-full rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${van.imageUrl})` }}
          ></div>

          <div className="van-detail flex h-fit w-full flex-col bg-body-cream">
            <span
              className={`w-fit cursor-pointer text-link-bg-cream ${van.type} mb-5 inline-block rounded-[4px] px-5 py-[6px]`}
            >
              {" "}
              {van.type}
            </span>

            <h2 className="pb-5 text-[32px] font-bold leading-tight tracking-normal">
              {van.name}
            </h2>
            <div className="pb-5">
              {" "}
              <span className="text-[25px] font-bold">${van.price}</span>{" "}
              <span className="text-[20px]">/day</span>{" "}
            </div>
            <p className="pb-5 pr-3 text-[17px] text-chinese-black">
              {van.description}
            </p>
            <Link
              to="/vans"
              className="link-button rounded-md bg-deep-saffron py-[12px] text-center text-[17px] font-bold text-white"
            >
              {" "}
              Rent this van
            </Link>
          </div>
        </div>
      
    </div>
  );
}
// useLocation() provides an object with useful information of the previous application state before it changes
export default VanDetail;
