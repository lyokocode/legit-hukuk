
import { navigations } from "../../mockData/Navigation"
import "./navbar.scss"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logoLink">
                <img className="logo" src="/legit.png" alt="Legit Hukuk & Danışmanlık" />
            </Link>

            <ul className="navlinks">
                {
                    navigations && navigations.map(navigation => (
                        <li key={navigation.id}>
                            <Link to={navigation.link}>
                                {navigation.title}

                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
