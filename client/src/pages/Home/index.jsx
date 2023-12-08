import { Detail, Hero, Card, WorkSpaces } from "@/components/"

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam, laborum nulla, similique possimus ducimus dolorem omnis quod quos labore amet quasi architecto cupiditate veritatis suscipit corporis eius, atque natus.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis, aliquid voluptate sequi placeat ad doloremque et veniam ipsam dolorem error provident delectus excepturi, doloribus adipisci porro est? Ea, id!
                </p>
            </div>

            <Card />

            <WorkSpaces />
        </div >
    )
}
