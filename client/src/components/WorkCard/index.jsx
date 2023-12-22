import "./workCard.scss"
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

export const WorkCard = ({ category }) => {

    return (
        <>
            {category && category.icon ? (
                <article className="workCard">
                    <div className="workInfo">
                        {
                            category.icon && (
                                <img
                                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/icon/${category.icon}`}
                                    alt={`${category.title} icon`}
                                    className="icon"
                                />
                            )
                        }
                        <h2 className="title">{category.title}</h2>
                        <p className="description"> {category.description}</p>
                    </div>
                    <div className="animation">
                        {
                            category.image && (
                                <img
                                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/image/${category.image}`}
                                    alt={`${category.title} image`}
                                    className="workImage"
                                />
                            )
                        }
                        <Link to={`/hizmetlerimiz/${category.slug}`}>
                            <h1>{category.title}</h1>
                        </Link>
                    </div>
                </article>
            ) : ("loading")}
        </>
    )
}
WorkCard.propTypes = {
    category: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
        image: PropTypes.string,
        file: PropTypes.string,
        slug: PropTypes.string,
    }),
};
