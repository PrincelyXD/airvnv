import { useState } from "react"


const Login = () => {
    const [loginFormData, setLoginFormData] = 
    useState({email:"", password:""})

    const handleSubmit = (event)=> [
        event.preventDefault(),
        
        console.log(loginFormData)
    ]

    const handleChange = (evt)=>{
            const {value, name} = evt.target
        
      setLoginFormData((prevData) => {
        return { ...prevData, [name]:value}
      })
    }

  return (
    <div className="h-[500px] flex flex-col  items-center w-full bg-body-cream ">
     <h1
      className="font-bold text-chinese-black text-[28px]">
        Sign in to your account</h1>

        <form onSubmit={handleSubmit} 
        className="my-5 w-full px-10 flex gap-y-2 flex-col">

        <input
        name="email"
         value={loginFormData.email}
        onChange={handleChange}
        type="text"
         className="w-full h-[50px] indent-3
         outline-none border rounded-lg py-2  border-stone-300"
         placeholder="Email Address" />

            <input
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
            type="text"
             className="w-full h-[50px] indent-3
             outline-none border rounded-lg py-2  border-stone-300"
             placeholder="Password" />

 <button  className=" button-button text-white active:scale-[1.03]
  transition-transform duration-300  bg-deep-saffron 
           py-[12px] rounded-md text-center"> Log in</button>

        </form>
    </div>
  )
}

export default Login
