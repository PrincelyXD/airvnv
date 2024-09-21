import {  useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");






// each button triggers a function that:
// creates a new search param
// then we update set search params with the object gotten from creating a new URLparam

function updateSearchParams(key, value) {
  setSearchParams( prevSearchParams => {
    if (value === null) {
      prevSearchParams.delete(key)
    }else{
      prevSearchParams.set(key, value)
    }

    return prevSearchParams;
  })
}


  const swCharacters = [
    { name: "Luke Skywalker", type: "Jedi" },
    { name: "Darth Vader", type: "Sith" },
    { name: "Emperor Palpatine", type: "Sith" },
    { name: "Yoda", type: "Jedi" },
  ];

  const displayedCharacters = typeFilter
    ? swCharacters.filter(
        (char) => char.type.toLocaleLowerCase() === typeFilter,
      )
    : swCharacters;

  const charEls = displayedCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  return (
    <main>
      <button onClick={()=> updateSearchParams('type', 'sith')} to="?type=sith" className="inline-block text-white">
        {" "}
        Sith
      </button>
      <button onClick={()=> updateSearchParams('type', 'jedi')} className="text-white">
        {" "}
        Jedi
      </button>
      <button onClick={()=>  updateSearchParams('type', null)}  className="text-white">
        {" "}
        Clear
      </button>
      <h2>Home</h2>
      {charEls}
    </main>
  );

  // return (

  //     <div className=" hero w-full h-[450px]  bg-home-background bg-center bg-cover flex items-center justify-center font-openSans">
  //       <div className="hoop flex flex-col px-9 py-[74px] text-white backdrop-brightness-[.6]">
  //          <h1 className=" text-[40px] py-5 font-extrabold leading-tight">You got the travel plans, we got the travel vans.</h1>
  //          <p className=" text-[19px] pb-14">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

  //          <button to='/vans' className=" button-button  bg-deep-saffron py-[12px] rounded-md text-center"> Find your van</button>
  //       </div>
  //     </div>

  // );
}

export default Home;
