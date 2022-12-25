import React from "react";
import cl from "./Box.module.scss";
import chest from "../../img/chest.png";
import chestOpen from "../../img/openChest.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Box = ({ setOpenBox }) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(false);
  const [noMoney, setNoMoney] = useState(false);
  const [win, setWin] = useState("Ничего");
  let hero = JSON.parse(localStorage.getItem("Hero"));

  useEffect(() => {
    hero = JSON.parse(localStorage.getItem("Hero"));
  }, [count]);

  if (hero.exp >= (99 * hero.level) / 1.5 && hero.exp !== 0 && hero !== null) {
    hero.level = hero.level + 1;
    hero.damage = hero.damage + 1;
    hero.healthPoint = hero.healthPoint + 10;
    hero.exp = 0;
    localStorage.setItem("Hero", JSON.stringify(hero));
  }

  function bounty() {
    if (hero.gold >= 500) {
      hero.gold = hero.gold - 500;
      let random = Math.floor(Math.random() * 100);

      setTimeout(setOpen(true), 3000);

      if (random >= 10 && random <= 15) {
        hero.gold = hero.gold + 500;
        setWin("Поздравляем, вы выиграли 500 монет!");
      } else if (random >= 15 && random <= 18) {
        hero.damage = hero.damage * 1.5;
        setWin("Поздравляем, вы выиграли двойной урон!");
      } else if (random >= 25 && random <= 31) {
        hero.exp = hero.exp + 500;
        setWin("Поздравляем, Вы выиграли 500 exp!");
      } else if (random >= 41 && random <= 49) {
        hero.exp = hero.exp + 100;
        setWin("Поздравляем, вы выиграли 100 exp!");
      } else if (random >= 51 && random <= 54) {
        hero.gold = hero.gold + 1500;
        setWin("Поздравляем, вы выиграли 1500 монет!");
      } else if (random >= 80 && random <= 83) {
        hero.exp = hero.exp + 1000;
        hero.gold = hero.gold + 1500;
        setWin("Поздравляем, вы выиграли 1000 exp и 1500 монет!");
      } else {
        setWin("Ничего");
      }

      localStorage.setItem("Hero", JSON.stringify(hero));
      setCount(count + 1);
    } else {
      setNoMoney(true);
    }
  }

  return (
    <div className={cl.Box}>
      {open ? (
        <div>
          <h2>Ваш выигрыш: {win}</h2>
          <img src={chestOpen} alt="chest" />
        </div>
      ) : (
        <div>
          <h2>
            Ваше золото: <b style={{ color: "gold" }}>{hero.gold}</b> монет
          </h2>
          <h2>
            Открыть за <b style={{ color: "gold" }}> 500</b> монет
          </h2>
          <img src={chest} alt="chest" />{" "}
        </div>
      )}
      {noMoney && <h2 style={{ color: "red" }}>Не хватает монет</h2>}
      {open ? (
        <button onClick={() => setOpen(false)}>Назад</button>
      ) : (
        <div className={cl.buttons}>
          <button onClick={bounty}>Открыть</button>
          <button onClick={() => setOpenBox(false)}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default Box;
