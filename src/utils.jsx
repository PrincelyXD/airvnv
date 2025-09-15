import { redirect} from "react-router-dom";



export async function requireAuth() {

    if (localStorage.getItem("isLoggedIn") === "false") {
      
        throw  redirect("/login?auth=error"); 
    }
   

    return null; 
}

