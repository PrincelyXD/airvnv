import { Link } from "react-router-dom";
// vancard is a link to a route  which needs van.id as an api request endpoint to get the specific van
function VanCard({ name, price, image, type, id }) {
  return (
    
    <Link
      aria-label={`View details for ${name}, priced at $${price} per day`}
      to={`${id}`}
    >
      <div className=" card-div text-black w-[250px] h-[350px] rounded-t-[5px]">
        {/* <div className= {`w-full h-[75%] bg-[url('${image}')]  bg-center bg-cover rounded-[5px]`}> </div> */}
        <img className=" rounded-[5px]" src={`${image}`} alt={`image of the ${name} van`} />
        <div className=" w-full flex items-center py-2  text-chinese-black relative">
          <p className=" text-[22px] mr-auto font-semibold"> {name}</p>
          <p className="text-[20px] font-semibold">${price}</p>
          <span className=" text-[14px] absolute right-0 bottom-[-10px]">
            /day
          </span>
        </div> 
        <div
          className={`text-link-bg-cream cursor-pointer ${type} py-[6px] px-5 rounded-[4px] inline-block`}
        >
          {type}
        </div>
      </div>
    </Link>
  );
}

export default VanCard;
