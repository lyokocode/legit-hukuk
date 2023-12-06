import { Detail, Hero, Card } from "@/components/"

import "./home.scss"

export const Home = () => {
    return (
        <div className="homePage">
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
                    1993 yılında Avukat Tamer Kulaçoğlu tarafından İstanbul’da kurulan Kulaçoğlu Hukuk Bürosu, avukatlık ve hukuki danışmanlık hizmeti vermekte olup, müvekkil ve danışanlarının ihtiyaç duydukları hukuki desteğin nitelikli şekilde temini ile sorunlarının çözümlenmesini amaçlamaktadır
                </p>

                <p>
                    Kulaçoğlu Hukuk Bürosu, “hukukun üstünlüğü” prensibi ışığında, tecrübesiyle harmanladığı güncel bilgi birikimi ile, temsil ettiği müvekkillerinin hukuki destek talep ve ihtiyaçlarını, doğru ve pratik şekilde çözüme kavuşturabilmek için çalışmalarını sürdürmektedir.
                </p>
            </div>

            <Card />
        </div >
    )
}
