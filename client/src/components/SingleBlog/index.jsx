import { Link } from "react-router-dom"
import PropTypes from "prop-types";


export const SingleBlog = ({ blog }) => {

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
        return formattedDate;
    }
    return (
        <div>
            <article className="blogCard">
                {blog.image && (
                    <img
                        src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/blog/image/${blog.image}`}
                        alt=""
                    />
                )}
                <Link
                    className="categoryName"
                    to={`/hizmetlerimiz/${blog?.Category?.slug}`}
                >
                    <div className="hr" />
                    {blog.Category?.title}
                </Link>
                <Link
                    className="blogName"
                    to={`/makaleler/${blog?.slug}`}
                >
                    Hukuka Aykırı Site Ve görüntülere erişimin engellenmesi
                </Link>
                <div className="date">
                    {formatDate(blog.date)}
                </div>
            </article>
        </div>
    )
}


SingleBlog.propTypes = {
    blog: PropTypes.shape({
        image: PropTypes.string,
        Category: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
        }),
        slug: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        // diğer özellikleri ekleyebilirsiniz
    }),
};

export default SingleBlog;