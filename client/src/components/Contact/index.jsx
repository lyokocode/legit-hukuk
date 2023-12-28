import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineWhatsApp } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

import "./contact.scss"

export const Contact = () => {
    const [greeting, setGreeting] = useState("Bizi biraz bekleyin...");
    const [modal, setModal] = useState(false)

    // Şu anki tarihi ve saati al
    const now = new Date();

    // Saati ve dakikayı al
    const hour = now.getHours();
    var minute = now.getMinutes();




    const modalToggle = () => {
        setModal(!modal)
    }

    const handleCreateOrder = () => {
        const phoneNumber = "5532768090"; // Phone Number
        const message = encodeURIComponent(
            "Merhaba, randevu oluşturmak istiyorum."
        ); // Message
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

        window.location.href = whatsappUrl;
    };
    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 8 && currentHour <= 17) {
            setGreeting("Hoş geldiniz");
        }
    }, []);
    return (
        <div className="contact">
            {/* <div>{greeting}</div>; */}
            <button onClick={modalToggle} aria-label="whatsapp" className="iconContainer">
                <AiOutlineWhatsApp size={30} />
            </button>

            {modal && (
                <>
                    <div className="app-widget--whatsapp-modal app-widget--whatsapp-position-right">
                        <button className="closeBtn" onClick={() => setModal(false)}>
                            <AiOutlineClose />
                        </button>
                        <div className="app-widget--whatsapp-modal-content app-widget--whatsapp-modal-content-position-right">
                            <div className="app-widget--whatsapp-modal-message">
                                <div className="app-widget--whatsapp-message">
                                    <div className="app-widget--whatsapp-message-bubble">
                                        <div className="app-widget--whatsapp-message-txt">
                                            <span className="app-widget--whatsapp-message-name">Legit Hukuk </span>
                                            <span className="app-widget--whatsapp-message-timestamp">{hour + ':' + (minute < 10 ? '0' : '') + minute}</span>
                                            <span className="app-widget--whatsapp-message-content">
                                                Merhaba, sizlere nasıl yardımcı olabiliriz?
                                            </span>
                                        </div>
                                        <div className="app-widget--whatsapp-message-bubble-arrow"></div>
                                    </div>
                                </div>
                                <div className="app-widget--whatsapp-send">
                                    <div className="app-widget--whatsapp-send-input">
                                        <input type="text" />
                                    </div>
                                    <button
                                        onClick={() => handleCreateOrder()}
                                        className="app-widget--whatsapp-send-btn">
                                        <IoMdSend />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
