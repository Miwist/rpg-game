import React from 'react'
import gold from "../../img/gold.png"
import cl from "./Inventory.module.scss"

const Inventory = () => {
  return (
    <div>
           <div className={cl.Menu_game}>
            <img src={gold} alt="gold" className={cl.gold_item}/>
        </div>
    </div>
  )
}

export default Inventory