
import VanCard from "../../components/VanCard";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
  return getVans()
  
}


const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
const vans = useLoaderData()

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      return newParams;
    });
  };

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const allVans =(
    displayedVans.map((van) => {
      return (
        <VanCard
          key={van.id}
          id={van.id}
          image={van.imageUrl}
          name={van.name}
          price={van.price}
          type={van.type}
          params={searchParams.toString()}
          typeFilter={typeFilter}
        />
      );
    })
  ) 
  

  return (
    <div className="bg-body-cream px-9 pb-14 text-chinese-black">
      <h1 className="text-[32px] font-bold">Explore our van options</h1>

      <div className="filter-buttons mb-12 mt-5 flex h-[40px] w-full text-[#4D4D4D]">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`mr-5 rounded-md bg-[#FFEAD0] px-[25px] py-[10px] text-[16px] transition-all duration-200 ease-custom-ease hover:bg-[#e17654] hover:text-link-bg-cream ${typeFilter === "simple" && "bg-[#e17654] text-link-bg-cream"}`}
        >
          simple
        </button>

        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`mr-5 rounded-md bg-[#FFEAD0] px-[25px] py-[10px] text-[16px] transition-all duration-200 ease-custom-ease hover:bg-[#161616] hover:text-link-bg-cream ${typeFilter === "luxury" && "bg-chinese-black text-link-bg-cream"}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`mr-5 rounded-md bg-[#FFEAD0] px-[25px] py-[10px] text-[16px] transition-all duration-200 ease-custom-ease hover:bg-[#115e59] hover:text-link-bg-cream ${typeFilter === "rugged" && "bg-bangladesh-green text-link-bg-cream"} `}
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
};

export default Vans;
