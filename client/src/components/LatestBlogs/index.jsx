import "./latestBlogs.scss"
import useFetch from "@/hooks/useFetch";

export const LatestBlogs = () => {

    const { data: blogs, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?fields=id,title,image,date&page=1&pageSize=5`
    );

    if (loading) {
        return "loading"
    }
    if (error) {
        return "error"
    }
    console.log(blogs)
    return (
        <div
            className="latestBlogs"
        >
            {
                blogs && blogs.map(blog => (
                    <div
                        key={blog.id}
                        className="singleBlog"

                    >
                        <img
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/blog/image/${blog.image}`}
                            alt=""
                        />
                        <div className="textContainer">
                            <h1 className="categoryName">{blog?.Category?.title}</h1>
                            <h1 className="categoryName">{blog?.title}</h1>
                            <h1 className="categoryName">{blog?.date}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
