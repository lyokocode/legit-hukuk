import PropTypes from "prop-types";
import "./hero.scss"
import { Link } from "react-router-dom"

export const Hero = ({ image = "./legit.png", title = "", blog = false }) => {

    return (
        <div className="heroSection">
            <img className="heroImage" src={image} alt="Legit Hukuk & danışmanlık" />
            {title !== "" && !blog && (
                <div className="textContainer">
                    <h1 className="page">{title}</h1>
                    <div className="link">
                        <span className="link"><Link to="/">Legit Hukuk & Danışmanlık |</Link> </span>
                        <span>{title}</span>
                    </div>
                </div>
            )}
            {
                blog && (
                    <div className="blogInfo">
                        <div className="category">
                            <Link>
                                {blog?.Category?.title}
                            </Link>
                            <div className="hr"></div>
                        </div>
                        <div className="blog">{blog?.title}</div>
                        <div className="date">{blog?.date}</div>
                    </div>
                )
            }
        </div>
    )
}

Hero.propTypes = {
    image: PropTypes.string,
};