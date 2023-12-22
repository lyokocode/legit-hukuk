import { Hero, Detail, BlogList, Menu, Pagination } from "@/components"
import { Helmet } from "react-helmet";
import "./blogs.scss"

export const Blogs = () => {
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Legit Hukuk | Makalelerimiz</title>
                <link rel="canonical" href="https://legithukuk.com" />
            </Helmet>


            <Hero
                image="/hero2.png"
                title="Blog"

            />

            <Detail
                title="Legit Hukuk & Danışmanlık"
                description="Makalelerimiz"
            />

            <div className="blogContainer">
                <div className="blogContainer">
                    <BlogList />
                </div>
                <div className="menuContainer">
                    <Menu />
                </div>
            </div>
        </>
    )
}
