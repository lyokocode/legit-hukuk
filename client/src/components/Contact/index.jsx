import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineWhatsApp } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs"

import "./contact.scss"

export const Contact = () => {
    const [greeting, setGreeting] = useState("Bizi biraz bekleyin...");
    const [modal, setModal] = useState(false)

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

            {modal && <>
                <article className="whatsaapModal">
                    <div className="whatsaapHeader">
                        <div className="left">
                            <AiOutlineWhatsApp size={25} />
                            <span>WhatsApp</span>
                        </div>
                        <div className="right">
                            <AiOutlineClose onClick={modalToggle} size={25} />
                        </div>
                    </div>
                    <div className="chatBox">

                        <div className="content">
                            <div className="message">Merhaba, size nasıl yardımcı olabiliriz?</div>
                        </div>
                    </div>
                    <button onClick={handleCreateOrder} className="sendMessage" aria-label="WhatsApp send message">
                        <span onClick={() => setWhatsappModal(true)}>Randevu  Oluştur</span>
                        <BsChevronDoubleRight name="whatsApp" />
                    </button>
                </article>
            </>}
        </div>
    )
}
