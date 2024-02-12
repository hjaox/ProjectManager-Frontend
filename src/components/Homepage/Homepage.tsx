import { useNavigate } from "react-router-dom";
import Guest from "./components/Guest";
import Login from "./components/Login";
import Register from "./components/Regsiter";

export default function Homepage() {
    let nav = useNavigate();

    
    return (
        <>
        <div>
            <Login/>
        </div>

        <div>
            <Guest/>
        </div>

        <div>
            <Register/>
        </div>
        </>
    )
}