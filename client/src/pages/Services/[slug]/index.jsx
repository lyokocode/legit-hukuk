import { Detail, Hero, MarkdownFile } from "@/components"
import useFetch from "@/hooks/useFetch"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet";

export const SingleService = () => {

    const { slug } = useParams()
    const { data: category, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories/category?slug=${slug}`
    );

    if (loading) {
        return "loading"
    }
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>{` ${category?.title}`}</title>
                <link rel="canonical" href="https://legithukuk.com" />
            </Helmet>


            <Hero
                image={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/image/${category?.image}` || "./hero3.png"}
                title={category.title}

            />

            {category.icon && (
                <Detail
                    img={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/icon/${category?.icon}`}
                    title="Çalışma Alanlarımız ve Faaliyetlerimiz"
                    description={category.title}
                />
            )}

            {category.file &&
                <MarkdownFile
                    address={`category/file/${category.file}`}
                />
            }

            <div className="hr">

            </div>

        </>
    )
}
