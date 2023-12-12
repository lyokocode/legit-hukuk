import { useParams } from "react-router-dom"
import { Hero, LawyerCard, LawyerAbout } from "@/components"
import useFetch from "@/hooks/useFetch"
import { Helmet } from "react-helmet";


import "./lawyer.scss"

export const SingleLawyer = () => {
    const { slug } = useParams()
    const { data: lawyer, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?slug=${slug}`
    );

    return (
        <section className="singleLawyer">

            <Helmet>
                <meta charSet="utf-8" />
                <title>{`Avukat ${lawyer?.fullName}`}</title>
                <link rel="canonical" href="https://legithukuk.com" />
            </Helmet>


            <Hero
                image="/hero1.png"
                title="Ekibimiz"
            />

            {
                loading ? "loading..." : (error ? "error" : (
                    <>
                        {
                            lawyer && lawyer?.avatar && lawyer?.about && (
                                <>
                                    <LawyerCard
                                        lawyer={lawyer}
                                    />

                                    <LawyerAbout
                                        document={lawyer.about}
                                    />
                                </>
                            )
                        }
                    </>
                ))
            }

        </section>
    )
}
