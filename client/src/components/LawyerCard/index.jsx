import "./lawyerCard.scss"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const LawyerCard = () => {
    return (
        <article className="lawyerCard">
            <div className="lawyerWrapper">
                <div className="imageContainer">
                    <img src="/law1.png" alt="" />

                </div>
                <div className="info">
                    <h1 className="name" >Av. Alican Yurdasever</h1>
                    <div className="teamTitle">
                        <h2>pozisyon</h2>
                        <h3>avukat</h3>
                    </div>
                    <div className="teamTitle">
                        <h2>etkin alanlar</h2>
                        <h3>gayrimenkul hukuku, borçlar hukukuku</h3>
                    </div>
                    <div className="teamTitle">
                        <h2>Yabancı dil</h2>
                        <h3>ingilizce, fransızca</h3>
                    </div>
                    <div className="teamTitle">
                        <h2>e-posta</h2>
                        <h3>alicanyurdasever@legithukuk.com</h3>
                    </div>
                    <div className="iconContainer">
                        <a href="#">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="#">
                            <FaTwitter size={30} />
                        </a>
                        <a href="#">
                            <MdEmail size={30} />
                        </a>
                    </div>
                </div>

            </div>
        </article>
    )
}
