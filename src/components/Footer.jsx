function Footer() {

    const date = new Date()

    return(
        
        <footer className=" text-[#AAAAAA] footer w-full h-[97px] bg-[#252525] border-2 border-black flex flex-col justify-center items-center">
        <p> <sub>made with 💜 by the Mercstudio team</sub> </p> 
        <p>Ⓒ {date.getFullYear()} #VANLIFE </p>
  </footer>
    )
}

export default Footer