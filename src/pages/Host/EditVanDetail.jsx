import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function EditVanDetail() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchVan = async () => {
      const req = await axios.get(`/api/host/vans/${id}`);
      setVan(req.data.vans[0]);
    };
    fetchVan();
  }, []);

  const styles = {
    fontWeight: "bold",
    borderBottom: "1.5px solid",
  };

  return (
    <div className=" py-10">
      <Link
        to=".."
        relative="path"
        className=" text-chinese-black before:content-['<-'] before:mr-1 before:text-[#161616] mb-9 block "
      >
        {" "}
        Back to all vans
      </Link>

      {van ? (
        <div className=" h-fit w-full  pb-5  bg-white rounded-lg">
          <div className=" h-[210px] w-full flex px-6 py-4 ">
            <img className="rounded-md" src={`${van.imageUrl}`} alt="oops" />
            <div className=" flex flex-col justify-center ml-5">
              <span
                className={`w-fit text-link-bg-cream cursor-pointer ${van.type} py-[5px] px-4 rounded-[4px] inline-block mt-[-10px]`}
              >
                {van.type}
              </span>

              <h2 className="text-[28px] font-semibold py-2 ">{van.name}</h2>
              <p className="text-[22px] font-semibold">
                ${van.price}{" "}
                <span className=" font-normal text-[17px]">/day</span>
              </p>
            </div>
          </div>

          <nav className="w-[300px] h-10 text-[17px] px-6 mb-5 flex justify-between">
            <NavLink
              to={`/host/vans/${id}`}
              end
              style={({ isActive }) => (isActive ? styles : null)}
              className='hover:border-b-[2px] border-[#4d4d4d] py-0 h-fit'
            >
              Details
            </NavLink>

            <NavLink
              to={`/host/vans/${id}/pricing`}
              style={({ isActive }) => (isActive ? styles : null)}
              className='hover:border-b-[2px] border-[#4d4d4d] py-0 h-fit'
            >
              Pricing
            </NavLink>

            <NavLink
              to={`/host/vans/${id}/photos`}
              style={({ isActive }) => (isActive ? styles : null)}
              className='hover:border-b-[2px] border-[#4d4d4d]  py-0 h-fit'
            >
              Photos
            </NavLink>
          </nav>

          <div className="px-6">
            <Outlet context={[van]} />
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default EditVanDetail;
