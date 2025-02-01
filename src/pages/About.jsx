import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" w-[600px] mx-[auto] h-fit bg-black font-inter">
      
      <div className="img-card w-full h-[250px] bg-about-img-bg  bg-center bg-cover"></div>

      <div className="px-9 pb-14 bg-body-cream">
        <div className="hero w-full h-fit py-14 text-chinese-black ">
          <h1 className="text-[32px] pb-[25px] font-bold leading-tight tracking-normal">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-[17px] pb-[25px] pr-3">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <br />
            (Hitch costs extra 😉)
          </p>
          <p className="text-[17px]">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>

        <div className=" w-full h-fit bg-peach-orange px-11 py-12 rounded-lg">
           <p className="text-[28px] font-bold leading-tight pb-12 pr-3">
           Your destination is waiting.
            Your van is ready.
           </p>

           <Link to='/vans' className=" vs-link text-[18px] px-6 py-4 font-semibold text-white rounded-lg bg-chinese-black">Explore our vans</Link>
        </div>
      </div>
    
    </div>
  );
}

export default About;
