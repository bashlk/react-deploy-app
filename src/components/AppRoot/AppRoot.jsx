import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation";

const AppRoot = () => {
    return (
        <>
            <Outlet />
            <Navigation />
        </>
    )
}

export default AppRoot;
