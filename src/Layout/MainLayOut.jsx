import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
       <div className="mt-4">
       <Outlet></Outlet>
       </div>
           
        </div>
    );
};

export default MainLayOut;