import React from 'react'
import { contact } from "@/mockData/data";
import { FaLocationArrow } from "react-icons/fa";
import * as Icons from 'react-icons/md'; // Tüm MdOutlineLocalPhone, MdOutlineXXX modüllerini içe aktarır

export const ContactLink = () => {
    return (
        <div className="links">
            {contact && contact.map(link => (

                <div key={link.id} className="link">
                    {React.createElement(Icons[link.icon])}
                    <p className="contactDetail">{link.detail}</p>
                    <p className="info">{link.text}</p>
                    <p className="contactLink">
                        <span>{link.title}</span>
                        <FaLocationArrow size={20} />
                    </p>
                </div>
            ))}
        </div>)
}
