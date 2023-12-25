import { Detail, Hero, Card, WorkSpaces } from "@/components/"
import { Helmet } from "react-helmet";

import "./home.scss"

export const Home = () => {
    return (
        <div className="homePage">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Legit Hukuk & Danışmanlık </title>
                <link rel="canonical" href="https://legithukuk.com" />
            </Helmet>

            <div >
                <Hero
                    image="/hero3.png"
                />
            </div>

            <Detail
                title="2023 | İzmir"
                description="Legit Hukuk & Danışmanlık"
            />
            <div className="about">
                <p>
                    LEGIT HUKUK & DANIŞMANLIK, Av. Dural BİLİR, Av. Oğuzhan KARAKAYA, Av. Ali Can YURDASEVER, Av. Egemen KARCI, Av. Canberk BİLİR, Av. Nazir Tilkioğlu ve Av. Erden Barış SARAN tarafından kurulmuş bir hukuk ve danışmanlık bürosudur.
                </p>

                <p>
                    Avukatlık Bürosu, multidisipliner bir yaklaşımla departman halinde iş takibi prensibiyle faaliyet göstermekte olup, sürekli araştırma ve sorgulama odaklı bir hizmet anlayışını benimseyerek sektöründe tanınan bir marka olma hedefine yönelmektedir.
                </p>

                <p>
                    LEGIT HUKUK & DANIŞMANLIK, ulusal ve uluslararası alanda faaliyet gösteren müvekkillerine ve danışanlarına avukatlık, arabuluculuk ve hukuki danışmanlık hizmetleri sunmaktadır. Avukatlık Bürosu  deneyimli ve dinamik kadrosuyla hukuki uyuşmazlıklar üzerine çeşitli yasal çözümler sunarak müvekkillerine destek sağlamaktadır.
                </p>

                <p>
                    Avukatlık Bürosu, etik ilkeleri ve hukuk normlarını temel alarak danışan ve müvekkillerine sağlıklı hukuki hizmetler sunma amacındadır. Profesyonel yaklaşımını deneyimle ve dinamizmle birleştirerek, alanında uzman, seçkin partnerlerle iş birliği yaparak sektörde aranan bir marka olma yolunda ilerlemektedir.
                </p>

            </div>

            <Card />

            <WorkSpaces />
        </div >
    )
}
