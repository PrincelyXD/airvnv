import axios from "axios";
import { useState, useEffect } from "react";
import VanCard from "../../components/VanCard";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchVanData = async () => {
      const req = await axios.get("/api/vans");
      setVans(req.data.vans);
    };
    fetchVanData();
  }, []);

  const allVans = vans.map((van) => {
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
    <div className=" bg-body-cream px-9 pb-14 ">
      <div className="grid grid-cols-2 gap-[28px]">{allVans}</div>
    </div>
  );
}

export default Vans;
