import axios from "axios";
import { useState, useEffect } from "react";
import VanCard from "../../components/VanCard";
import { NavLink, useSearchParams } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const fetchVanData = async () => {
      const req = await axios.get("/api/vans");
      setVans(req.data.vans);
    };
    fetchVanData();
  }, []);

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const allVans = displayedVans.map((van) => {
    return (
      <VanCard
        key={van.id}
        id={van.id}
        image={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
      />
    );
  });

  return (
    <div className="bg-body-cream px-9 pb-14 text-chinese-black">
      <h1 className="text-[32px] font-bold">Explore our van options</h1>

      <div className="mb-12 mt-5 flex h-[40px] w-full text-[#4D4D4D]">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`mr-5 rounded-md bg-[#FFEAD0] px-[25px] py-[10px] text-[16px] transition-all duration-200 ease-custom-ease hover:bg-[#e17654] hover:text-link-bg-cream ${typeFilter === "simple" && "bg-[#e17654] text-link-bg-cream"}`}
        >
          simple
        </button>

        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`mr-5 rounded-md bg-[#FFEAD0] px-[25px] py-[10px] text-[16px] transition-all duration-200 ease-custom-ease hover:bg-[#161616] hover:text-link-bg-cream ${typeFilter === "luxury" && "bg-[#161616] text-link-bg-cream"}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`mr-5 rounded-md bg-[#FFEAD0] px-[25px] py-[10px] text-[16px] transition-all duration-200 ease-custom-ease hover:bg-[#115e59] hover:text-link-bg-cream ${typeFilter === "rugged" && "bg-[#115e59] text-link-bg-cream"} `}
        >
          Rugged
        </button>

        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="ml-auto px-[15px] py-[10px] underline"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-[28px]">{allVans}</div>
    </div>
  );
}

export default Vans;
