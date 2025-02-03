import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { BASE_URL } from "../store/helper";


const defaultContactForm = {
    username: "",
    email: "",
    message: ""
}

export const Contact = () => {

    const [contact, setContact] = useState(defaultContactForm)

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if (userData && user) {

        setContact({
            username: user.username,
            email: user.email,
            message: ""
        });

        setUserData(false);

    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        })


        // second method  **********

        // setContact((prev) => ({
        //     ...prev,
        //     [name] : value
        // }));


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(contact);

        try {
            const response = await fetch(`${BASE_URL}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });

            const res_data = await response.json();


            if (response.ok) {
                // console.log(res_data);
                toast.success(res_data.message)
                setContact(defaultContactForm);

            }
        } catch (error) {
            console.error(error)

        }


    }


    return <>
        <div className="container grid sm:grid-cols-2 m-4 gap-4 max-w-[1920px] mx-auto">
            <div className="registration-image reg-img min-h-[300px]  sm:min-h-[500px] rounded-lg  grid p-10 transition-all place-items-end ">
                <img className="rounded-lg"
                    src="/images/contact.jpg"
                    alt="a girl trying to do registration"
                    width="450"
                    height="800"
                />
            </div>
            <div className="registration-form  sm:min-h-[500px] rounded-lg  flex
              flex-col p-5 justify-center box transition-all place-items-center  text-purple-400">

                <h1 className="main-heading mb-3 text-2xl text-b font-bold">Contact Us</h1>

                <form action="" className="w-full flex flex-col items-center" onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >

                    <label className="block mb-1" htmlFor="username">Username</label>

                    <input className="border-white border-1 rounded-lg text-center" type="text" name="username" value={contact.username} autoComplete="off"
                        placeholder="Enter your name"
                        required
                        id="username"
                        onChange={handleInput} />


                    <label className="block mb-1" htmlFor="email">Email</label>

                    <input className="border-white border-1 rounded-lg text-center" type="email" name="email"
                        value={contact.email} autoComplete="off"
                        placeholder="Enter your email"
                        required
                        id="email"
                        onChange={handleInput} />

                    <label className="block mb-1" htmlFor="message">Message</label>
                    <textarea className="border-white border-1 rounded-lg text-center"
                        name="message"
                        id="message"
                        autoComplete="off"
                        required

                        cols="30"
                        rows="10"
                        value={contact.message}
                        onChange={handleInput}
                    >

                    </textarea>

                    <br />

                    <button className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition-all duration-300"  type="submit">Send Message </button>
                </form>

            </div>
        </div>
    </>
};