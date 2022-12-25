import React from "react";
import gold from "../../img/gold.png";
import cl from "./Inventory.module.scss";
import { heroList } from "../Info/Character";

const Inventory = ({ setOpenInventory }) => {
  let hero = JSON.parse(localStorage.getItem("Hero"));
  let inventory = JSON.parse(localStorage.getItem("inventory"));

  return (
    <div className={cl.inventory}>
      <div className={cl.title}>
        <h3>Инвентарь</h3>
      </div>
      <div className={cl.description}>
        <div className={cl.gold_box}>
          <img src={gold} alt="gold" className={cl.gold_item} /> {hero.gold}
        </div>
      </div>
      <div className={cl.inventory_box}>
        <div className={cl.inventory_boxItem}>
          <img src={hero.weapon} alt={hero.weaponName} />
          <h4>{hero.weaponName}</h4>
        </div>

        {inventory.map((item) => (
          <div className={cl.inventory_boxItem}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button type="button" onClick={() => setOpenInventory(false)}>
        Закрыть
      </button>
    </div>
  );
};

export default Inventory;
