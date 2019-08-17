import React from 'react'
import {useState, useEffect} from 'react'
import '../css/menu.css'

function Menu(props) {
    let {spells, currentIdx} = props

    const spellItems = spells.map( (spell, idx) => {
        return <div className={ currentIdx === idx ? "active" : ""} key={spell}>{spell}</div>
    })
    
    return (  
        <div className="menu">
            {spellItems}
        </div>
    );
}

export default Menu;
