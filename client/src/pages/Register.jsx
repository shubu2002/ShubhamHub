import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";



export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
    })

    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })

    }

    const { storeTokenInLs } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {

            const response = await fetch(`http://localhost:3000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const res_data = await response.json();

            if (response.statusText == "Created") {

                setUser({
                    username: "",
                    email: "",
                    password: "",
                    phone: "",
                });
                storeTokenInLs(res_data.token);

                toast.success(res_data.msg);
                navigate("/")
            } else {
                console.log("Error:", res_data.message); // Log error message
                toast.error(res_data.message); // Alert user about the error
            }
            console.log(response);
        } catch (error) {
            console.log("resgister", error);

        }


    }

    return <>
        <div className="container grid sm:grid-cols-2 m-4 gap-4 max-w-[1920px] mx-auto">
            <div className="registration-image reg-img min-h-[300px]  sm:min-h-[500px] rounded-lg  grid transition-all place-items-end p-10 ">
                <img className="rounded-lg"
                    src="/images/register.jpg"
                    alt="a girl trying to do registration"
                    width="450"
                    height="800"
                />
            </div>


            <div className="registration-form  sm:min-h-[500px] rounded-lg  flex
              flex-col p-5 justify-center box transition-all place-items-center  text-purple-400">

                <h1 className="main-heading mb-3 text-2xl text-b font-bold">Registration Form</h1>
                <br />
                <form action=""
                    className="w-full flex flex-col items-center"
                    onSubmit={handleSubmit}
                   
                >

                    <label className="block mb-1"htmlFor="username">Username</label>

                    <input className="border-white border-1 rounded-lg text-center" type="text" name="username" value={user.username} autoComplete="off"
                        placeholder="Enter your name"
                        required
                        id="username"
                        onChange={handleInput} />


                    <label className="block mb-1" htmlFor="email">Email</label>

                    <input className="border-white border-1 rounded-lg text-center" type="email" name="email"
                        value={user.email} autoComplete="off"
                        placeholder="Enter your email"
                        required
                        id="email"
                        onChange={handleInput} />

                    <label className="block mb-1"htmlFor="password">Password</label>
                    <input className="border-white border-1 rounded-lg text-center" type="password"
                        name="password"
                        placeholder="Enter your password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}


                    />

                    <label className="block mb-1" htmlFor="phone">Phone Number</label>

                    <input className="border-white border-1 rounded-lg text-center" type="number"
                        name="phone"
                        value={user.phone} autoComplete="off"
                        placeholder="Enter your phone"
                        required
                        id="phone"
                        onChange={handleInput} />
                    <br/>
                    <button className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition-all duration-300" type="submit">Register Now</button>
                </form>
            </div>
        </div>
    </>
};