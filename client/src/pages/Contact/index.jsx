import "./contact.scss"
import { Helmet } from "react-helmet";
import { Hero, Detail, Map, ContactLink } from "@/components"

export const Contact = () => {
    return (
        <>
            {/* seo */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Legit Hukuk | İletişim</title>
                <link rel="canonical" href="https://legithukuk.com" />
            </Helmet>

            {/* ------------------------------------------------------ */}
            <Hero
                image="/hero4.png"
                title="İletişim"

            />

            <Detail
                title="Detaylı Bilgi İçin"
                description="Bizimle İletişime Geçin"
            />

            <section className="contactContainer">
                <div className="text">
                    <p>
                        Hizmetlerimizin kapsamı ve çalışma şartları hakkında bilgi almayı istemeniz
                        <br />
                        halinde, sitemizdeki iletişim kanallarından herhangi birini kullanarak
                        <br />
                        bizlerle iletişime geçebilirsiniz.
                    </p>
                </div>

                <Map />

                <ContactLink />

            </section>
        </>
    )
}
