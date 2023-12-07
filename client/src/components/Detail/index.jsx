import "./detail.scss"
import PropTypes from "prop-types";

export const Detail = ({ title = "2023 | İzmir", description = "Legit Hukuk & Danışmanlık", img = "" }) => {

    return (
        <article className="detail">
            <div className="info">
                {
                    img !== "" ? (
                        <img className="detailImage" src={img} alt="hero image" />
                    ) : (
                        <div className="hr" />
                    )
                }
                {title}
                <div className="hr" />
            </div>
            <div className="text">
                {description}
            </div>
        </article>
    )
}

Detail.propTypes = {
    description: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
};