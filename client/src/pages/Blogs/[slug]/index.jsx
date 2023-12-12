import { useParams } from "react-router-dom"
import { Hero, MarkdownFile } from "@/components"
import useFetch from "@/hooks/useFetch"

export const SingleBlog = () => {
    const { slug } = useParams()
    const { data: blog, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/blog?slug=${slug}`
    );
    if (loading) {
        return "loading"
    }

    return (
        <div>
            {
                blog.image && (
                    <Hero
                        image={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/blog/image/${blog.image}`}
                        title={blog.title}
                        blog={blog}
                    />
                )
            }

            {
                blog.blog && (
                    <MarkdownFile
                        address={`blog/file/${blog.blog}`}
                    />
                )
            }

        </div>
    )
}
