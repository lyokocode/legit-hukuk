import { Hero, Detail } from "@/components"
import { Link } from "react-router-dom"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { lawyerData } from '@/mockData/data';
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
                    lawyerData && lawyerData.map(lawyer => (
                        <div
                            key={lawyer.id}
                            className="lawyer"
                        >
                            <img src={lawyer.image} alt={`Avukat ${lawyer.name}`} />
                            <div className="lawyerInfo">
                                <Link to={`./${lawyer.slug}`}>
                                    <h1 className="name">{lawyer.name}</h1>
                                </Link>
                                <h2 className="position">{lawyer.position}</h2>
                                <p className="lawyerAbout"> {lawyer.detail}</p>
                                <div className="iconLinks">
                                    {lawyer.links && lawyer.links.map((link, i) => (
                                        <span key={i}>
                                            {
                                                link == "twitter" ? (
                                                    <a href=""><FaTwitter size={20} /></a>
                                                ) : (
                                                    link == "email" ? (
                                                        <a href=""><MdEmail size={20} /></a>

                                                    ) : (
                                                        <a href=""><FaLinkedin size={20} /></a>
                                                    )
                                                )
                                            }
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}
