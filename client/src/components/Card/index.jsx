import { cards } from "~/mockData/data"
import "./card.scss"
export const Card = () => {
    return (
        <div className="cardContainer">
            {cards && cards.map(card => (
                <div key={card.id}
                    className="card"
                >
                    <img className="categoryImage" src={card.image} alt="" />
                    <div className="info">
                        <h1 className="index">{`0${card.id}`}</h1>
                        <h2 className="title">{card.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}
