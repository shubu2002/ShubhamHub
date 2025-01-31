import { useAuth } from "../store/auth";

export const About = () => {
    const {user} =  useAuth();
    return <>
        <div className="main-container">

        welcome {user.username || "user"} ,
        this is  About page
        </div>
    </>
};