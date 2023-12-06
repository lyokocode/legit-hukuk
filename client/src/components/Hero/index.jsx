import PropTypes from "prop-types";
import "./hero.scss"
import { Link } from "react-router-dom"

export const Hero = ({ image = "./legit.png", title = "" }) => {

    return (
        <div className="heroSection">
            <img className="heroImage" src={image} alt="Legit Hukuk & danışmanlık" />
            {title !== "" && (
                <div className="textContainer">
                    <h1 className="page">{title}</h1>
                    <div className="link">
                        <span className="link"><Link to="/">Legit Hukuk & Danışmanlık |</Link> </span>
                        <span>{title}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

Hero.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};