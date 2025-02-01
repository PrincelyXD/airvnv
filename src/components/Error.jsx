import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError() 
 
  return (
    <div className="h-[500px] w-full bg-body-cream gap-x-4 flex flex-col items-center justify-center">
      <h1>OOPs...  <span className=" inline-block rotate-90">:{"("}</span> </h1>
    <p className="text-sm px-10 md:px-20">{error.message}</p>
     
    </div>
  )
}

export default Error
