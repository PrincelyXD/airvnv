import { Form,
  useNavigation,
  useSearchParams,
  useActionData, 
  Navigate} from "react-router-dom";
import { loginUser } from "../../../api";



export const loginFormAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const credentials = { email, password };
  try {
    const response = await loginUser(credentials);
      localStorage.setItem("isLoggedIn", "true");
      return <Navigate to={"/host"}/>
     
    }
    
 catch (err) {
    localStorage.setItem("isLoggedIn", "false");
    return err.message
  }

};




const Login = () => {
  const [searchParams] = useSearchParams()
  const authState =  searchParams.get("auth")
  const errorMessage = useActionData()
const navigation = useNavigation()
const submitting = navigation.state === "submitting"

  return (
    <div className="flex h-[500px] w-full flex-col items-center bg-body-cream">
      <h1 className="text-[28px] font-bold text-chinese-black">
        Sign in to your account
      </h1>

      <Form method="post" className="my-5 flex w-full flex-col px-10">
        {errorMessage && <span className="text-sm"> ⚠️ {errorMessage}</span>}
        <input
          name="email"
          type="text"
          className="h-[50px] w-full rounded-lg border-[0.5px] border-stone-400 py-2 indent-3 outline-none placeholder:text-stone-500"
          placeholder="Email address"
        />

        <input
          name="password"
          type="text"
          className="h-[50px] w-full rounded-lg border-[0.5px] border-stone-400 py-2 indent-3 outline-none placeholder:text-stone-500"
          placeholder="Password"
        />

        <button
          className={`button-button mt-5 rounded-md bg-deep-saffron 
            py-[12px] text-center text-white transition-transform
             duration-300 active:scale-[1.03]
             ${submitting&& " pointer-events-none bg-slate-300"}
             `}
        >
         {submitting ? "Signing in...": "Sign in"} 
        </button>

        {authState === "error" && (
          <span className="mx-auto mt-5 text-sm text-[#ff0000dd]">
            ⓧ You need to be signed in to access the host route
          </span>
        )}
      </Form>
    </div>
  );
};

export default Login;
