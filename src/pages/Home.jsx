import { Link } from "react-router-dom";


function Home() {
  return (
   
      <div className=" hero w-full h-[450px]  bg-home-background bg-center bg-cover flex items-center justify-center font-openSans">
        <div className="hoop flex flex-col px-9 py-[74px] text-white backdrop-brightness-[.6]">
           <h1 className=" text-[40px] py-5 font-extrabold leading-tight">You got the travel plans, we got the travel vans.</h1>
           <p className=" text-[19px] pb-14">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

           <Link to='/vans' className=" link-button  bg-deep-saffron py-[12px] rounded-md text-center"> Find your van</Link>
        </div>
      </div>


  );
}

export default Home;
