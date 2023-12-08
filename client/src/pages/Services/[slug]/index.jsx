import { Detail, Hero, MarkdownFile } from "@/components"
import useFetch from "@/hooks/useFetch"
import { useParams } from "react-router-dom"

export const SingleService = () => {

    const { slug } = useParams()
    const { data: category, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories/category?slug=${slug}`
    );

    if (loading) {
        return "loading"
    }
    console.log(category)
    return (
        <>
            <Hero
                image={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/image/${category?.image}`}
                title={category.title}

            />

            <Detail
                img={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/icon/${category?.icon}`}
                title="Çalışma Alanlarımız ve Faaliyetlerimiz"
                description={category.title}
            />

            <MarkdownFile
                address={`category/file/${category.file}`}
            />

        </>
    )
}
