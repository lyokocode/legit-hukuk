import "./lawyerCard.scss"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PropTypes from "prop-types";

export const LawyerCard = ({ lawyer }) => {

    return (
        <article className="lawyerCard">
            {
                lawyer && lawyer?.avatar ? (
                    <div className="lawyerWrapper">
                        <div className="imageContainer">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/user/avatar/${lawyer?.avatar}`}
                                alt={`avukat ${lawyer.fullName}`}
                            />

                        </div>
                        <div className="info">
                            <h1 className="name" >Av. {lawyer.fullName}</h1>
                            <div className="teamTitle">
                                <h2>pozisyon</h2>
                                <h3 className="position">{lawyer.position}</h3>
                            </div>
                            <div className="teamTitle">
                                <h2>etkin alanlar</h2>
                                <h3>{lawyer?.activeAreas}</h3>
                            </div>
                            <div className="teamTitle">
                                <h2>Yabancı dil</h2>
                                <h3>ingilizce, fransızca</h3>
                            </div>
                            <div className="teamTitle">
                                <h2>e-posta</h2>
                                <h3 className="email">{lawyer.email}</h3>
                            </div>
                            <div className="iconContainer">
                                <a href={lawyer.linkedin}>
                                    <FaLinkedin size={30} />
                                </a>
                                <a href={lawyer.linkedin}>
                                    <FaTwitter size={30} />
                                </a>
                                <a href={`mailto:${lawyer.email}`}>
                                    <MdEmail size={30} />
                                </a>
                            </div>
                        </div>

                    </div>
                ) : ("loading")
            }
        </article>
    )
}

LawyerCard.propTypes = {
    lawyer: PropTypes.shape({
        avatar: PropTypes.string,
        fullName: PropTypes.string,
        position: PropTypes.string,
        activeAreas: PropTypes.string,
        email: PropTypes.string,
        linkedin: PropTypes.string,
    }),
};