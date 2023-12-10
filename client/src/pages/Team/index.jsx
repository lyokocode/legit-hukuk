import { Hero, Detail } from "@/components"
import { Link } from "react-router-dom"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useFetch from "@/hooks/useFetch";

import "./team.scss"

export const Team = () => {

    const { data: lawyers, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/users`
    );
    console.log(lawyers)

    return (
        <>
            <Hero
                image="/hero1.png"
                title="Ekibimiz"
            />


            <Detail
                title="Büromuz Bünyesinde Çalışan"
                description="Ekip Arkadaşlarımız"
            />

            <section className="teams">
                {
                    loading ? "loading..." : (error ? "error" : (
                        lawyers.map(lawyer => (
                            <div
                                key={lawyer.id}
                                className="lawyer"
                            >
                                <img
                                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/user/avatar/${lawyer.avatar}`}
                                    alt={`Avukat ${lawyer.fullName}`}
                                />
                                <div className="lawyerInfo">
                                    <Link to={`./${lawyer.slug}`}>
                                        <h1 className="name">{lawyer.fullName}</h1>
                                    </Link>
                                    <h2 className="position">{lawyer.position}</h2>
                                    <p className="lawyerAbout"> {lawyer.detail}</p>
                                    <div className="iconLinks">

                                        <div className="iconLinks">
                                            <a href={lawyer.twitter}>
                                                <FaTwitter size={20} />
                                            </a>
                                            <a href={lawyer.linkedin}>
                                                <FaLinkedin size={20} />
                                            </a>
                                            <a href={lawyer.email}>
                                                <MdEmail size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))
                }
            </section>
        </>
    )
}
