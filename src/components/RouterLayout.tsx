
import {Outlet} from "react-router";
import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";

const RouterLayout = () => {


    return (
        <>
            <HeaderResponsive />
            <div className="Container mx-auto min-h-[95vh] pt-24">
                <Outlet/>
            </div>
            <Footer/>

        </>
    )
}
export default RouterLayout;