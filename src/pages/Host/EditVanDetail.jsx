import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../utils";

export async function EditVanDetailLoader({ params }) {
  await requireAuth()
  return getHostVans(params.id);
}

function EditVanDetail() {
  const data = useLoaderData();
  const van = data[0];
  const styles = {
    fontWeight: "bold",
    borderBottom: "1.5px solid",
  };

  return (
    <div className="py-10">
      <Link
        to=".."
        relative="path"
        className="mb-9 block w-fit text-chinese-black before:mr-1 before:text-[#161616] before:content-['<-']"
      >
        Back to all vans
      </Link>

      <div className="h-fit w-full rounded-lg bg-white pb-5">
        <div className="flex h-[210px] w-full px-6 py-4">
          <img className="rounded-md" src={`${van.imageUrl}`} alt="oops" />
          <div className="ml-5 flex flex-col justify-center">
            <span
              className={`w-fit cursor-pointer text-link-bg-cream ${van.type} mt-[-10px] inline-block rounded-[4px] px-4 py-[5px]`}
            >
              {van.type}
            </span>

            <h2 className="py-2 text-[28px] font-semibold">{van.name}</h2>
            <p className="text-[22px] font-semibold">
              ${van.price} <span className="text-[17px] font-normal">/day</span>
            </p>
          </div>
        </div>

        <nav className="mb-5 flex h-10 w-[300px] justify-between px-6 text-[17px]">
          <NavLink
            to={`.`}
            end
            style={({ isActive }) => (isActive ? styles : null)}
            className="h-fit border-[#4d4d4d] py-0 hover:border-b-[2px]"
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? styles : null)}
            className="h-fit border-[#4d4d4d] py-0 hover:border-b-[2px]"
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? styles : null)}
            className="h-fit border-[#4d4d4d] py-0 hover:border-b-[2px]"
          >
            Photos
          </NavLink>
        </nav>

        <div className="px-6">
          <Outlet context={[van]} />
        </div>
      </div>
    </div>
  );
}

export default EditVanDetail;
