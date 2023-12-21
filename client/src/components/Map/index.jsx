import React from 'react'
import "./map.scss"
import { FiMapPin } from "react-icons/fi";
import { BiSolidNavigation } from "react-icons/bi";

export const Map = () => {
    return (
        <article className='mapContainer'>
            <div className='info'>
                <FiMapPin color='red' size={45} />
                <h2 className='location'>Karşıyaka / İzmir</h2>
                <h3 className='place'> Donanmacı mah. 1732. Sk. No:9 D:11</h3>
                <h3 className='place'>Pazartesi - Cuma: 08.00 - 18.00</h3>
                <a className='link' href="https://www.google.com/maps/dir//41.0674335,29.01176/@41.067434,29.01176,16z?hl=en" target="_blank" rel="noreferrer" >
                    Yol Tarifi Al
                    <BiSolidNavigation />
                </a>
            </div>
            <div className='map'>
                <iframe src="https://maps.google.com/maps?q=ergene%20555%20sokak%20no:16&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
            </div>
        </article>
    )
}
