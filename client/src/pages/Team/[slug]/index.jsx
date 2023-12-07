import { useParams } from "react-router-dom"
import { Hero, LawyerCard, LawyerAbout } from "@/components"
import "./lawyer.scss"

export const SingleLawyer = () => {
    const { slug } = useParams()
    console.log(slug)
    return (
        <section className="singleLawyer">
            <Hero
                image="/hero1.png"
                title="Ekibimiz"
            />

            <LawyerCard />

            <LawyerAbout />

        </section>
    )
}
