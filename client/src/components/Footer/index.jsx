import "./footer.scss"
import { links } from "@/mockData/data"
import useFetch from "@/hooks/useFetch"
import { Link } from "react-router-dom"
export const Footer = () => {
    const { data: categories, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );


    return (
        <footer className="footer">
            <div className="office">
                <img src="/legit.png" alt="legit hukuk logo" />
                <div className="info">
                    <h2>Addres:</h2>
                    <h4>
                        Esentepe Mah. Kasap Sok. Eser İş Merkezi B Blok No:18 D:63
                        Şişli / İstanbul
                    </h4>
                </div>
                <div className="info">
                    <h2>Telefon:</h2>
                    <h4>
                        {"0 (232) 123 45 67"}
                    </h4>
                </div>
                <div className="info">
                    <h2>whatsapp:</h2>
                    <h4>
                        +90 123 456 78 90
                    </h4>
                </div>
                <div className="info">
                    <h2>e-posta:</h2>
                    <h4>
                        info@legithukuk.com
                    </h4>
                </div>
            </div>
            <div className="links">
                <h1>Faydalı Linkler</h1>
                <ul className="linkContainer">

                    {links && links.map(link => (
                        <li key={link.id}>
                            <a href={link.link} target="_blank" rel="noreferrer">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="workSpace">
                <h1>Çalışma Alanları</h1>
                {
                    loading ? ("loading") : (
                        <ul className="linkContainer">
                            {categories && categories.map(work => (
                                <li key={work.id}>
                                    <Link to={`/hizmetlerimiz/${work.slug}`}>
                                        {work.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </footer>
    )
}

