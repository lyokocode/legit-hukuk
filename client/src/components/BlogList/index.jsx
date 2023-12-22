import "./blogList.scss";
import { useSearchParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { Pagination, SingleBlog } from "@/components";
import { useState, useEffect } from "react";
""
export const BlogList = () => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);

    useEffect(() => {
        // Sayfa parametresini al, yoksa varsayılan olarak 1'i kullan
        const newPage = parseInt(searchParams.get("page")) || 1;
        setPage(newPage);

        // Sayfa büyüklüğü parametresini al, yoksa varsayılan olarak 1'i kullan
        const newSize = parseInt(searchParams.get("pageSize")) || 1;
        setPageSize(newSize);
    }, [searchParams]);

    const { data: blogs, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?page=${page}&pageSize=${pageSize}`
    );

    if (loading) {
        return "loading";
    }

    if (error) {
        return "error";
    }

    return (
        <div className="test">
            <section className="blogList">
                {blogs?.map((blog) => (
                    <SingleBlog
                        key={blog.id}
                        blog={blog}
                    />
                ))}

                <Pagination page={page} pageSize={pageSize} onPageChange={setPage} />
            </section>
        </div>
    );
};
