import { Detail, Hero } from "@/components"
import "./services.scss"
import { WorkCard } from "@/components/WorkCard"
import { workData } from "@/mockData/data"
export const Services = () => {
    console.log(workData)
    return (
        <>
            <Hero
                image="/hero2.png"
            />

            <Detail
                title="Legit Hukuk & Danışmanlık"
                description="Çalışma Alanlarımız ve Faaliyetlerimiz"
            />

            <section className="services">
                {
                    workData && workData.map(work => (
                        <WorkCard
                            key={work.id}
                            work={work}
                        />
                    ))
                }
            </section>
        </>
    )
}
