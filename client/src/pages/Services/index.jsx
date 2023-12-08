import { Detail, Hero, WorkList } from "@/components"
import "./services.scss"

export const Services = () => {

    return (
        <>
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
