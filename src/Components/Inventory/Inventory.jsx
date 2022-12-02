import React from "react";
import gold from "../../img/gold.png";
import cl from "./Inventory.module.scss";
import { heroList } from "../Info/Character";


const Inventory = ({ setOpenInventory }) => {
  let goldHero = JSON.parse(localStorage.getItem("gold"));
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));
  return (
    <div className={cl.inventory}>
      <div className={cl.title}>
        <h3>Инвентарь</h3>
      </div>
      <div className={cl.description}>
        <div className={cl.gold_box}>
          <img src={gold} alt="gold" className={cl.gold_item} /> {goldHero}
        </div>
      </div>
      <div className={cl.inventory_box}>
        <div className={cl.inventory_boxItem}>
          <img src={heroList[heroCount].weapon} alt={heroList[heroCount].weaponName}/>
          <h4>{heroList[heroCount].weaponName}</h4>
        </div>
      </div>

      <button type="button" onClick={() => setOpenInventory(false)}>
        Закрыть
      </button>
    </div>
  );
};

export default Inventory;
