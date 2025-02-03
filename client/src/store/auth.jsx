import { createContext, useContext, useEffect, useState , useCallback } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "./helper";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [serviceData , setServiceData] = useState([]);

    const [token , setToken] = useState(localStorage.getItem("token"));

    const [user ,setUser ] = useState("");

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken)
       return localStorage.setItem("token", serverToken);
    }

    let isLoggedIn = !!token ;

    // tackling the logout functionality 

    const LogoutUser = useCallback(() => {
        console.log("LogoutUser function called");
        setToken("");
        toast.info("Logged Out Successfully");
        return localStorage.removeItem("token");
      }, []);
    

    // jwt authentication -- to get current user data  
    const userAuthentication = async () =>{
        if (!token) return ;
        try {
            const response = await fetch(`${BASE_URL}/api/auth/user`, {
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                },
            });

            if (response.ok) {
                const data =  await response.json();
                console.log(" user data", data.userData)
                setUser(data.userData);

                
            }else {
                console.error("Error fetching user data");
              }
        } catch (error) {
            console.error("error fetching user data",error)
            
        }
    }

    const serviceDataFn = async () =>{
        try {
            const response =  await fetch(`${BASE_URL}/api/data/service`, {
                method : "GET"

            });
            
            if (response.ok) {
                const data = await response.json();
                console.log(data.msg)

                setServiceData(data.msg);
                
                
            }

        } catch (error) {
            console.log("service data" , error);
            
        }
    }

    useEffect(()=> {
       if (token) {
        userAuthentication();
         
       }else{
        setUser("")
       }
    },[token]);

    useEffect(()=> {
        serviceDataFn();
    },[]);

    

    return (
        <AuthContext.Provider 
        value={{isLoggedIn ,storeTokenInLs , LogoutUser ,user ,serviceData}}>

            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    
    return useContext(AuthContext)

}