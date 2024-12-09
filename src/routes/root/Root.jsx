
import { Outlet } from "react-router-dom";
import Navbar from "../../shareComponent/navbar/Navbar";
import Footer from "../../shareComponent/footer/Footer";
const Root = () => {
    // const location =useLocation()
    // const isLogin =location.pathname.includes('login')
    return (
        <div>
            {/* { isLogin || <Navbar></Navbar> } */}
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            <Footer></Footer>
            
           {/* {isLogin || <Footer></Footer>}  */}
            
        </div>
    );
};

export default Root;

