import React from 'react'

import "./menu.scss"
import { CategoryList } from '../CategoryList';

export const Menu = () => {

    return (
        <div className='menuContainer'>
            <div className='title'>
                <div className="hr" />
                <h1>Kategoriler</h1>
                <div className="hr" />
            </div>

            <CategoryList />
            <div>
                son bloglar
            </div>
        </div>
    )
}
