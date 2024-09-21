import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchVanData = async () => {
      const req = await axios.get("/api/host/vans");
      setVans(req.data.vans);
    };

    fetchVanData();
  }, []);

  const vanList = (
    <div className=" pb-10">
      {vans.map((van) => (
        <Link
          to={`${van.id}`}
          key={van.id}
          className="w-full h-[110px] bg-white flex px-6 py-4 rounded-lg my-4"
        >
          <img className="rounded-md" src={`${van.imageUrl}`} alt="van image" />

          <div className="flex flex-col justify-center ml-5">
            <p className=" text-[19px] font-semibold text-chinese-black">
              {van.name}
            </p>
            <div className="text-[16px] text-[#4d4d4d]">
              <span>${van.price}</span>
              <span>/day</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div>
      <h1 className=" text-[32px] font-bold py-6 text-chinese-black text-3x">
        Your listed vans
      </h1>
      {vans.length > 0 ? vanList: <p className="text-[20px]">Loading...</p>}
    </div>
  );
}

export default HostVans;
