import { Outlet } from "react-router-dom"
import "../index.scss"
import { Footer, Navbar, Contact } from "../components"

const Layout = () => {

    return (
        <div className="responsive">
            <Navbar />
            <div className="wrapper">
                <Outlet />
            </div>
            <Footer />
            <Contact />
        </div>
    )
}

export default Layout