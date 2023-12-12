import "./blogList.scss"
import { Link } from "react-router-dom"
import useFetch from "@/hooks/useFetch";

export const BlogList = () => {

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
        return formattedDate;
    }

    const { data: blogs, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs`
    );
    if (loading) {
        return "loading"
    }
    if (error) {
        return "error"
    }
    console.log(blogs)
    return (
        <section className='blogList'>
            {blogs?.map(blog => (
                <article key={blog.id} className="blogCard">
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
            ))}


        </section>
    )
}


