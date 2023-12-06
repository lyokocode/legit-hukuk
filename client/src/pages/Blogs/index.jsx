import { Hero, Detail } from "@/components"
import "./blogs.scss"

export const Blogs = () => {
    return (
        <div>
            <div>
                <Hero
                    image="/hero2.png"
                />
            </div>

            <Detail
                title="Legit Hukuk & Danışmanlık"
                description="Makalelerimiz"
            />

            <div>
                deneme
            </div>
        </div>
    )
}
