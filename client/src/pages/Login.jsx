import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

import {  toast } from 'react-toastify';
import { BASE_URL } from "../store/helper";


export const Login = () => {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const { storeTokenInLs } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("sending user data",user)
    try {

      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      // console.log("login form",response);
      
      const res_data = await response.json();
      if (response.ok) {
        console.log("res from server" , res_data);

        // store token in localStorage 
        storeTokenInLs(res_data.token);
        
        toast.success("login successful")
        setUser({
          email: "",
          password: ""
        });

        navigate("/")
      } else {
        toast.error(res_data.message)
      }


    } catch (error) {
      console.log("login", error)
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid sm:grid-cols-2 m-4 gap-4 max-w-[1920px] mx-auto">
              <div className="registration-image reg-img min-h-[300px]  sm:min-h-[500px] rounded-lg  grid p-10 transition-all place-items-end ">
                <img className="rounded-lg"
                  src="/images/form.jpg"
                  alt="a girl trying to do registration"
                  width="450"
                  height="800"
                />
              </div>

              <div className="registration-form  sm:min-h-[500px] rounded-lg  flex
              flex-col p-5 justify-center box transition-all place-items-center  text-purple-400">
                <h1 className="main-heading mb-3 text-2xl text-b font-bold">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit} 
                className="w-full flex flex-col items-center">
                  <div>
                    <label htmlFor="email">Email &nbsp; </label>
                    <input className="border-white border-1 rounded-lg"
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      
                    />
                  </div>
                  <br />
                  <div className="ml-[-30px]">
                    <label htmlFor="password">Password  &nbsp; </label>
                    <input
                    className="border-white border-1 rounded-lg "
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      
                    />
                  </div>
                  <br />
                  <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition-all duration-300">
                    Login 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};