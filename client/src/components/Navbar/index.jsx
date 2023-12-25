import { useEffect, useRef, useState } from "react";
import { navigations } from "@/mockData/Navigation";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeActionRef = useRef();

    const close = () => {
        setOpen(false);
    };

    const handleKeyPress = (event) => {
        if (event.keyCode === 27) {
            // 27 is the keyCode for the "Escape" key
            close();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                closeActionRef.current &&
                !closeActionRef.current.contains(event.target)
            ) {
                close();
            }
        };

        const handleKeyPressEvent = (event) => {
            handleKeyPress(event);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyPressEvent);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyPressEvent);
        };
    }, []);

    return (
        <nav className="navbar" ref={closeActionRef}>
            <Link to="/" className="logoLink">
                <img className="logo" src="/legit.png" alt="Legit Hukuk & Danışmanlık" />
            </Link>

            <ul className="navlinks">
                {navigations &&
                    navigations.map((navigation) => (
                        <li key={navigation.id} className="link">
                            <Link to={navigation.link}>{navigation.title}</Link>
                        </li>
                    ))}
            </ul>

            <button className="iconContainer" onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>

            {open && (
                <div className="responsiveNavbar">
                    <ul className="responsiveList">
                        {navigations &&
                            navigations.map((navigation) => (
                                <li
                                    key={navigation.id}
                                    className="link"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        close();
                                    }}
                                >
                                    <Link to={navigation.link}>{navigation.title}</Link>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};
