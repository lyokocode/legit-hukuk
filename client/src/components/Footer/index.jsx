import "./footer.scss"
import { workData, links } from "@/mockData/data"

export const Footer = () => {
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
                            <a href={link.link}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="workSpace">
                <h1>Çalışma Alanları</h1>
                <ul className="linkContainer">
                    {workData && workData.map(work => (
                        <li key={work.id}>
                            {work.title}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

