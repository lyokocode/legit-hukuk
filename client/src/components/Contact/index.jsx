import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineWhatsApp } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

import "./contact.scss"

export const Contact = () => {
    const [modal, setModal] = useState(false)

    const [confirmation, setConfirmation] = useState(false);
    const [checked, setChecked] = useState(false);

    // Saati ve dakikayı al
    const now = new Date();
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

    const handleContinue = () => {
        if (checked) {
            handleCreateOrder();
        } else {
            alert("Lütfen KVKK aydınlatma metnini okuyup onaylayınız.");
        }
    };
    return (
        <div className="contact">
            {/* <div>{greeting}</div>; */}
            <button onClick={modalToggle} aria-label="whatsapp" className="iconContainer">
                <AiOutlineWhatsApp size={30} />
            </button>

            {modal && (
                <>
                    <div className="app-widget--whatsapp-modal app-widget--whatsapp-position-right">
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
                                        onClick={() => setConfirmation(true)}
                                        className="app-widget--whatsapp-send-btn"
                                    >
                                        <IoMdSend />
                                    </button>
                                </div>
                                <button className="closeBtn "
                                    onClick={() => setModal(false)}
                                >
                                    <AiOutlineClose size={30} />
                                </button>
                            </div>
                            {confirmation && (

                                <div className="confirmation">
                                    <div className="confirmation-box">
                                        <p><span>KVKK aydınlatma metni'ni</span> okudum, onaylıyorum.</p>
                                        <div className="checkContainer">
                                            <div>
                                                <input type="checkbox" id="confirmationCheckbox" onChange={() => setChecked(!checked)} />
                                                <label htmlFor="confirmationCheckbox">Onaylıyorum</label>
                                            </div>
                                            <button onClick={handleContinue}>Devam Et</button>
                                            <button onClick={() => setConfirmation(false)}>İptal</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
