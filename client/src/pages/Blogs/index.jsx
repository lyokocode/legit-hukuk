import { Hero, Detail, BlogList, Menu } from "@/components"
import "./blogs.scss"

export const Blogs = () => {
    return (
        <>
            <Hero
                image="/hero2.png"
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
