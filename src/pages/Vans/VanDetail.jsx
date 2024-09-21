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
    <div className="mx-[auto] h-fit w-[600px] bg-chinese-black font-inter text-black">
      {van ? (
        <div className="bg-body-cream px-9 pb-16">
          <Link
            to=".."
            relative="path"
            className="text-chinese-black before:mr-1 before:text-[#161616] before:content-['<-']"
          >
            Back to all vans
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
      ) : (
        <div className="flex h-[450px] w-full items-center justify-center bg-body-cream px-9 text-[40px] font-bold text-chinese-black">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default VanDetail;
