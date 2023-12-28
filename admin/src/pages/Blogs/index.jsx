import "./blog.scss"
import useFetch from "../../hooks/useFetch"
import { BlogList, Error, Header, Loading } from "../../components";
import { useState } from "react";
export const Blogs = () => {

    const [page, setPage] = useState(1)

    const { data: blogs, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?page=${page}&pageSize=6`
    );

    return (
        <section className="blogPage">
            <Header title="blog" reFetch={reFetch} />
            <>
                {
                    loading ? <Loading /> : (error ? <Error error={error.message} /> : (
                        <>
                            <div className="blogWrapper">
                                {blogs && blogs.map(blog => (
                                    <>
                                        <BlogList key={blog?.id} blog={blog} reFetch={reFetch} />
                                    </>
                                ))}
                            </div>
                            <div className="pagination">
                                <button onClick={() => setPage(page - 1)} className="prev">prev</button>
                                <button onClick={() => setPage(page + 1)} className="next">next</button>
                            </div>
                        </>
                    ))
                }
            </>
        </section>
    )
}
