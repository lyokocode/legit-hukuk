import "./workCard.scss"
import { Link } from "react-router-dom"

export const WorkCard = ({ category }) => {

    return (
        <>
            {category && category.file && category.icon ? (
                <article className="workCard">
                    <div className="workInfo">
                        <img
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/icon/${category.icon}`}
                            alt={`${category.title} icon`}
                            className="icon"
                        />
                        <h2 className="title">{category.title}</h2>
                        <p className="description"> {category.description}</p>
                    </div>
                    <div className="animation">
                        <img
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/image/${category.image}`}
                            alt={`${category.title} image`}
                            className="workImage"
                        />
                        <Link to={`/hizmetlerimiz/${category.slug}`}>
                            <h1>{category.title}</h1>
                        </Link>
                    </div>
                </article>
            ) : ("loading")}
        </>
    )
}
