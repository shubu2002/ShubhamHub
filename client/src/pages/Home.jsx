import { useAuth } from "../store/auth";

export const Home = () => {
    const {user} = useAuth();
    return <>
        hello {user.username || "user"} home page
    </>
};