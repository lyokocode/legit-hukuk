import "./blogList.scss"
import { Link, useSearchParams } from "react-router-dom"
import useFetch from "@/hooks/useFetch";
import { Pagination } from "@/components";
import { useState } from "react";

export const BlogList = () => {

    const [searchParams] = useSearchParams()
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
        return formattedDate;
    }

    const { data: blogs, loading, error } = useFetch(
        // `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?${searchParams.toString()}`
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?page=${page}&pageSize=${pageSize}&${searchParams.toString()}`
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

            <Pagination
                page={page}
                pageSize={pageSize}
                onPageChange={setPage}
            />

        </section>
    )
}


