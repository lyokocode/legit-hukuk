import "./workCard.scss"
import { Link } from "react-router-dom"
export const WorkCard = ({ work }) => {
    return (
        <article className="workCard">
            <div className="workInfo">
                <img
                    src={work.icon}
                    alt={`${work.title} icon`}
                    className="icon"
                />
                <h2 className="title">{work.title}</h2>
                <p className="description"> {work.description}</p>
            </div>
            <div className="animation">
                <img
                    src={work.image}
                    alt={`${work.title} image`}
                    className="workImage"
                />
                <Link to={`./${work.slug}`}>
                    <h1>{work.title}</h1>
                </Link>
            </div>
        </article>
    )
}
