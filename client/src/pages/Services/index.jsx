import { Detail, Hero, WorkList } from "@/components"
import { Helmet } from "react-helmet";
import "./services.scss"

export const Services = () => {

    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Legit Hukuk | Çalışma Alanlarımız</title>
                <link rel="canonical" href="https://legithukuk.com" />
            </Helmet>

            <Hero
                image="/hero2.png"
                title="Hizmetlerimiz ve Çalışma Alanlarımız"

            />

            <Detail
                title="Legit Hukuk & Danışmanlık"
                description="Çalışma Alanlarımız ve Faaliyetlerimiz"
            />

            <section className="services">
                <WorkList />
            </section>
        </>
    )
}
