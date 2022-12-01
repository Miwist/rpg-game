import React from "react";
import gold from "../../img/gold.png";
import cl from "./Inventory.module.scss";
import sword from "../../img/sword.png";

const Inventory = ({ setOpenInventory }) => {
  return (
    <div className={cl.inventory}>
      <div className={cl.title}>
        <h3>Инвентарь</h3>
      </div>
      <div className={cl.description}>
        <div className={cl.gold_box}>
          {" "}
          <img src={gold} alt="gold" className={cl.gold_item} /> 450
        </div>
      </div>
      <div className={cl.inventory_box}>
        <div className={cl.inventory_boxItem}>
          <img src={sword} alt="sword" />
          <p>Обычный меч</p>
        </div>
      </div>

      <button type="button" onClick={() => setOpenInventory(false)}>
        Закрыть
      </button>
    </div>
  );
};

export default Inventory;
