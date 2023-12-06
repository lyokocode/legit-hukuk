import { Detail, Hero } from "@/components"
import "./services.scss"

export const Services = () => {
    return (
        <div className="services">
            <div>
                <Hero
                    image="/hero2.png"
                />
            </div>

            <Detail
                title="Legit Hukuk & Danışmanlık"
                description="Çalışma Alanlarımız ve Faaliyetlerimiz"
            />
        </div>
    )
}
