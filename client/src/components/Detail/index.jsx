import "./detail.scss"
import PropTypes from "prop-types";

export const Detail = ({ title = "2023 | İzmir", description = "Legit Hukuk & Danışmanlık" }) => {
    return (
        <article className="detail">
            <div className="info">
                <div className="hr" />
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
    title: PropTypes.string,
};