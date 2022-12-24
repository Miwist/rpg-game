import React from "react";
import cl from "./Score.module.scss";
import gold from "../../img/gold.png";
import { useState } from "react";
import { itemsAll } from "./Items";
const Score = ({ setOpenScore }) => {
  const [buy, setBuy] = useState(false);
  const [noMoney, setNoMoney] = useState(false);

  let hero = JSON.parse(localStorage.getItem("Hero"));
  let goldHero = hero.gold;
  const [itemId, setItemId] = useState(0);
  let inventory = JSON.parse(localStorage.getItem("inventory"));

  function buyItem() {
    if (hero.gold >= itemsAll[itemId].price) {
      hero.gold = hero.gold - itemsAll[itemId].price;
      inventory.push(itemsAll[itemId]);
      if (itemId === 1) {
        hero.healthPoint = hero.healthPoint + 200;
        hero.itemHp = "200"
      }
      if (itemId === 2) {
        hero.spell = "firewall";
      }
      if (itemId === 3) {
        hero.damage = hero.damage * 2;
      }

      localStorage.setItem("inventory", JSON.stringify(inventory));
      localStorage.setItem("Hero", JSON.stringify(hero));
      delete itemsAll[itemId];
      localStorage.setItem("score", JSON.stringify(itemsAll));
      setBuy(false);
    } else {
      setBuy(false);
      setNoMoney(true);
    }
  }

  return (
    <div className={cl.score}>
      <div className={cl.title}>
        <h3>Магазин</h3>
      </div>
      <div className={cl.description}>
        <div className={cl.gold_box}>
          <img src={gold} alt="gold" className={cl.gold_item} /> {goldHero}
        </div>
      </div>

      <div className={cl.score_box}>
        {itemsAll.map((item) => (
          <div onClick={() => setItemId(item.id)}>
            <div className={cl.score_boxItem} onClick={() => setBuy(true)}>
              <h4>{item.name}</h4>
              <img src={item.img} alt={item.name} />
              <p>{item.description}</p>
              <p>Цена: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {buy && (
        <div className={cl.modalScore}>
          <h2>Вы точно хотите купить предмет?</h2>
          <button onClick={buyItem}>Купить</button>
          <button onClick={() => setBuy(false)}>Назад</button>
        </div>
      )}
      {noMoney && (
        <div className={cl.modalScore}>
          <h2>Недостаточно монет</h2>
          <button onClick={() => setNoMoney(false)}>Назад</button>
        </div>
      )}
      <button type="button" onClick={() => setOpenScore(false)}>
        Закрыть
      </button>
    </div>
  );
};

export default Score;
