import { Hero, Detail } from "~/components"
import "./team.scss"

export const Team = () => {
    return (
        <div>
            <Hero
                image="/hero1.png"
                title="Ekibimiz"
            />


            <Detail
                title="Büromuz Bünyesinde Çalışan"
                description="Ekip Arkadaşlarımız"
            />
        </div>
    )
}
