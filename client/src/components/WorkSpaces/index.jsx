import "./workSpaces.scss"
import { WorkList } from "@/components"
export const WorkSpaces = () => {
    return (
        <div className="workSpaces">
            <header className="header">
                <div className="left">
                    <div className="title">
                        <h1>Legit Hukuk Bürosu</h1>
                        <div className="hr" />
                    </div>
                    <h2>Çalışma Alanlarımız</h2>
                </div>
                <div className="center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat nesciunt suscipit sit repellendus quasi delectus aliquam! Magni aliquam dolor esse distinctio blanditiis fugiat velit veritatis deserunt voluptatem porro!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel, facere laboriosam itaque rem ipsum beatae ipsa officia asperiores est soluta molestias iure tempore totam iusto harum reiciendis reprehenderit laborum sint ab facilis quisquam quam saepe? Expedita, dolores? Molestias consequatur illo necessitatibus! Omnis totam quidem accusantium iure nihil recusandae illum!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus laborum eveniet possimus a autem?</p>
                </div>
                <div className="right">
                    Çalışma Alanları
                </div>
            </header>
            <WorkList />
        </div>
    )
}
