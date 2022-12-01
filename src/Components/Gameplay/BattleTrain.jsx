import React, { useEffect, useState } from "react";
import cl from "./BattleTrain.module.scss";
import { heroList, monsterList } from "../Info/Character";
import FinalBattle from "./FinalBattle";
import GameOver from "./GameOver";

const BattleTrain = ({ setTrain }) => {
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));
  const [monsterCount, setMonsterCount] = useState(0);
  let monster = monsterList[monsterCount];

  const [attack, setAttack] = useState(false);
  const [attackMonster, setAttackMonster] = useState(false);
  const [damage, setDamage] = useState(0);
  const [damageMonster, setDamageMonster] = useState(0);
  const [final, setFinal] = useState(false);
  const [gameover, setGameover] = useState(false);
  let goldHero = JSON.parse(localStorage.getItem("gold")) + monster.gold;
  let expHero = JSON.parse(localStorage.getItem("exp")) + monster.exp;
  let damageHero = JSON.parse(localStorage.getItem("damage"));
  let healthHero = JSON.parse(localStorage.getItem("health"));
  let levelHero = JSON.parse(localStorage.getItem("level"));
  let heroHP = healthHero - damageMonster;
  let monsterHP = monster.healthPoint - damage;
  let width = 120;

  useEffect(() => {
    if (levelHero >= 5) {
      setMonsterCount(1);
    } else if (levelHero >= 10) {
      setMonsterCount(2);
    } else if (levelHero >= 15) {
      setMonsterCount(3);
    }
  }, [levelHero]);

  function heroAttack() {
    setAttack(true);
    setDamage(damage + damageHero);
    End();
    function noAttack() {
      setAttack(false);
    }
    setTimeout(noAttack, 100);
  }

  console.log(damage);

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
      setDamageMonster((damageMonster) => damageMonster + monster.damage);
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
              -{monster.damage}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{monster.damage}</p>
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
              -{damageHero}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{heroList[heroCount].damage}</p>
          )}
          <div className={cl.health}>
            <div
              className={cl.inProgress}
              style={{
                background: "red",
                width: width - damage / (monster.healthPoint / width),
                height: "100%",
              }}
            >
              {monster.healthPoint - damage}
            </div>
          </div>
          <img src={monster.img} alt={heroList[heroCount].name} />
        </div>
      </div>
      <div className={cl.skills} onClick={heroAttack}>
        <img
          src={heroList[heroCount].weapon}
          alt={heroList[heroCount].weapon}
        />
      </div>
      <h3>Атаковать</h3>
      {final && <FinalBattle monsterCount={monsterCount} setTrain={setTrain} />}
      {gameover && <GameOver setTrain={setTrain} />}
    </div>
  );
};

export default BattleTrain;
