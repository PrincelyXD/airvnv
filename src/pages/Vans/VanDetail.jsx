import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function VanDetail() {
  const [van, setVan] = useState(null);
 
  const { id } = useParams();

  useEffect(() => {
    const fetchVanData = async () => {
      const req = await axios.get(`/api/vans/${id}`);
      setVan(req.data.vans);
    };
    fetchVanData();
  }, []);

  return (
    <div className=" text-black w-[600px] mx-[auto] h-fit bg-chinese-black font-inter">
      {van ? (
        <div className="px-9 pb-16  bg-body-cream">
          <Link
            to="/vans"
            className=" text-chinese-black before:content-['<-'] before:mr-1 before:text-[#161616] "
          >
            Back to all vans
          </Link>

          <div
            className="w-full h-[450px] bg-center bg-cover my-11 flex rounded-lg"
            style={{ backgroundImage: `url(${van.imageUrl})` }}
          ></div>

          <div className="van-detail w-full h-fit bg-body-cream flex flex-col">
            <span
              className={`text-link-bg-cream w-fit cursor-pointer ${van.type} py-[6px] px-5 mb-5 rounded-[4px] inline-block`}
            >
              {" "}
              {van.type}
            </span>

            <h2 className="text-[32px]  pb-5 font-bold leading-tight tracking-normal">
              {van.name}
            </h2>
            <div className=" pb-5">
              {" "}
              <span className=" font-bold text-[25px]">${van.price}</span>{" "}
              <span className="text-[20px]">/day</span>{" "}
            </div>
            <p className="text-[17px] pb-5 pr-3 text-chinese-black">
              {van.description}
            </p>
            <Link
              to="/vans"
              className=" link-button font-bold text-[17px] text-white bg-deep-saffron py-[12px] rounded-md text-center"
            >
              {" "}
              Rent this van
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-body-cream h-[450px] w-full font-bold text-[40px] text-chinese-black px-9 flex items-center justify-center">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default VanDetail;
