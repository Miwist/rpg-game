import React, { useRef, useState } from "react";
import cl from "./StartModal.module.scss";
import wand from "../../img/wand.png";
import swords from "../../img/swords.png";
import spears from "../../img/spears.png";
import { heroList } from "../Info/Character";
import castleEvil from "../../img/castle.jpg";

const StartModal = () => {
  const [startmodal, setStartModal] = useState(true);
  const [userName, setUsername] = useState("");
  const [start, setStart] = useState(true);
  let Hero = JSON.parse(localStorage.getItem("Hero"));
  let nameRef = useRef();

  function changeName() {
    let name = nameRef.current.value;
    if (name.length >= 3) {
      setUsername(name);
      nameRef.current.value = " ";
      setStart(false);
    } else {
      alert("В имени меньше 3 символов");
    }

    if (name == "Таня") {
      heroList[3].userName = userName;
      localStorage.setItem("Hero", JSON.stringify(heroList[3]));
      localStorage.setItem("inventory", JSON.stringify([]));
      closeModal();
    }

    if (name == "Test") {
      heroList[4].userName = userName;
      localStorage.setItem("Hero", JSON.stringify(heroList[4]));
      localStorage.setItem("inventory", JSON.stringify([]));
   
      closeModal();
    }
  }

  function closeModal() {
    if (userName.length >= 3 && userName !== null) {
      localStorage.setItem("inventory", JSON.stringify([]));
      setStartModal(false);
      window.location.reload();
    } else {
      alert("Введите корректное имя");
    }
  }
  function Warrior() {
    if (userName.length >= 3 && userName !== null) {
      heroList[1].userName = userName;
      localStorage.setItem("Hero", JSON.stringify(heroList[1]));

      closeModal();
    } else {
      alert("Введите корректное имя");
    }
  }

  function Wizzard() {
    if (userName.length >= 3 && userName !== null) {
      heroList[0].userName = userName;
      localStorage.setItem("Hero", JSON.stringify(heroList[0]));

      closeModal();
    } else {
      alert("Введите корректное имя");
    }
  }

  function Warwoman() {
    if (userName.length >= 3 && userName !== null) {
      heroList[2].userName = userName;
      localStorage.setItem("Hero", JSON.stringify(heroList[2]));

      closeModal();
    } else {
      alert("Введите корректное имя");
    }
  }

  if (startmodal === true && Hero === null)
    return (
      <div className={cl.StartModal}>
        {start && (
          <div className={cl.StartModal}>
            <h2>Приветствую тебя!</h2>
            <p>
              В наше королевство вторгся злой маг Альтерас и заколдовал всех.
              Люди превратились в монстров. Я как король этих мест, прошу тебя о
              помощи, обрети силу в здещних краях и победи мага!
            </p>
            <div className={cl.title}>
              <h3>Как тебя зовут?</h3>
              <input
                type="text"
                placeholder="Введите своё имя..."
                ref={nameRef}
              />
              <button type="button" onClick={changeName}>
                ок
              </button>
            </div>
          </div>
        )}

        <h2>Выберите класс</h2>
        <div className={cl.heroes_box}>
          <div className={cl.heroes_item} onClick={Wizzard}>
            <img src={wand} alt="wand" />
            <h3>Маг</h3>
          </div>
          <div className={cl.heroes_item} onClick={Warrior}>
            <img src={swords} alt="swords" />
            <h3>Воин</h3>
          </div>
          <div className={cl.heroes_item} onClick={Warwoman}>
            <img src={spears} alt="western" />
            <h3>Воительница</h3>
          </div>
        </div>
      </div>
    );
};

export default StartModal;
