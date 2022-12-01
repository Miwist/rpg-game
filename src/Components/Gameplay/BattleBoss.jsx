import React, { useEffect, useState } from "react";
import cl from "./BattleTrain.module.scss";
import { heroList, bossList } from "../Info/Character";
import FinalBattle from "./BossFinal";
import GameOver from "./GameOver";

const BattleBoss = ({ setBoss }) => {
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));

  const [attack, setAttack] = useState(false);
  const [attackMonster, setAttackMonster] = useState(false);
  const [damage, setDamage] = useState(0);
  const [damageMonster, setDamageMonster] = useState(0);
  const [final, setFinal] = useState(false);
  const [gameover, setGameover] = useState(false);

  let heroHP = heroList[heroCount].healthPoint - damageMonster;
  let monsterHP = bossList[0].healthPoint - damage;
  let width = 120;

  function heroAttack() {
    setAttack(true);
    setDamage(damage + heroList[heroCount].damage);
    End();
    function noAttack() {
      setAttack(false);
    }
    setTimeout(noAttack, 100);
  }

  function attackShow() {
    setAttackMonster(true);
    setTimeout(noAttack, 500);
    End();
    function noAttack() {
      setAttackMonster(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      attackShow();
      setDamageMonster((damageMonster) => damageMonster + bossList[0].damage);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (heroHP <= 0) {
    heroHP = 0;
  } else if (monsterHP <= 0) {
    monsterHP = 0;
  }

  let goldHero = JSON.parse(localStorage.getItem("gold")) + bossList[0].gold;
  let expHero = JSON.parse(localStorage.getItem("exp")) + bossList[0].exp;

  function End() {
    if (heroHP <= 0) {
      setGameover(true);
    } else if (monsterHP <= 0) {
      setFinal(true);
      monsterHP = 0;
      localStorage.setItem("gold", JSON.stringify(goldHero));
      localStorage.setItem("exp", JSON.stringify(expHero));
    }
  }

  return (
    <div className={cl.battleArea}>
      {attackMonster ? (
        <h3 style={{ color: "red", opacity: "1" }}>Вас бьют!</h3>
      ) : (
        <h3 style={{ opacity: 0 }}>Вас бьют!</h3>
      )}
      <div className={cl.battlePlace} onClick={heroAttack}>
        <div className={cl.hero}>
          {attackMonster ? (
            <p style={{ color: "red", opacity: "1", marginBottom: "10px" }}>
              -{bossList[0].damage}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{bossList[0].damage}</p>
          )}
          <div className={cl.health}>
            <div
              className={cl.inProgress}
              style={{
                background: "green",
                width: width - damageMonster / (heroHP / width),
                height: "100%",
              }}
            >
              {heroHP}
            </div>
          </div>
          <div className={cl.heroIcon}>
            <img
              className={cl.heroImg}
              src={heroList[heroCount].img}
              alt={heroList[heroCount].name}
            />
          </div>
        </div>

        <div className={cl.monster}>
          {attack ? (
            <p style={{ color: "white", opacity: "1", marginBottom: "10" }}>
              -{heroList[heroCount].damage}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{heroList[heroCount].damage}</p>
          )}
          <div className={cl.health}>
            <div
              className={cl.inProgress}
              style={{
                background: "red",
                width: width - damage / (bossList[0].healthPoint / width),
                height: "100%",
              }}
            >
              {bossList[0].healthPoint - damage}
            </div>
          </div>
          <img src={bossList[0].img} alt={heroList[heroCount].name} />
        </div>
      </div>
      <div className={cl.skills} onClick={heroAttack}>
        <img
          src={heroList[heroCount].weapon}
          alt={heroList[heroCount].weapon}
        />
      </div>
      <h3>Атаковать</h3>
      {final && <FinalBattle setTrain={setBoss} />}
      {gameover && <GameOver setTrain={setBoss} />}
    </div>
  );
};

export default BattleBoss;
