import "./blogList.scss";
import { useSearchParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { Pagination, SingleBlog } from "@/components";

export const BlogList = () => {

    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page')) || 1;
    const pageSize = 6

    const { data: blogs, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?${searchParams.toString() == "" ? "page=1" : searchParams.toString()}&pageSize=${pageSize}`
    );

    const handlePageChange = (newPage) => {
        searchParams.set('page', newPage);
        window.location.search = searchParams.toString();
    };


    if (loading) {
        return "loading";
    }

    if (error) {
        return "error";
    }


    return (
        <div className="test">
            <section className="blogList">
                {blogs.length > 0 ? blogs?.map((blog) => (
                    <SingleBlog
                        key={blog.id}
                        blog={blog}
                    />
                )) : "blog bulunamadı"}

                <Pagination
                    currentPage={page}
                    onPageChange={handlePageChange}
                />
            </section>
        </div>
    );
};
