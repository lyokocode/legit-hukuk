import { useParams } from "react-router-dom"
import { Hero, LawyerCard, LawyerAbout } from "@/components"
import useFetch from "@/hooks/useFetch"

import "./lawyer.scss"

export const SingleLawyer = () => {
    const { slug } = useParams()
    const { data: lawyer, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?slug=${slug}`
    );

    return (
        <section className="singleLawyer">
            <Hero
                image="/hero1.png"
                title="Ekibimiz"
            />

            {
                loading ? "loading..." : (error ? "error" : (
                    <>
                        <LawyerCard
                            lawyer={lawyer}
                        />

                        <LawyerAbout
                            document={lawyer.about}
                        />
                    </>
                ))
            }

        </section>
    )
}
