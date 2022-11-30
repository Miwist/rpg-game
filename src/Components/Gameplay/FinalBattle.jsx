import React from 'react'
import cl from "./BattleTrain.module.scss";
import { heroList, monsterList } from "../Info/Character";

const FinalBattle = ({setTrain}) => {
  return (
    <div className={cl.FinalBattle}>
            <h2>Бой завершён</h2>
            <h3>Ваша награда: </h3>
            <p>Опыт: {monsterList[0].exp} exp</p>
            <p>Золото: {monsterList[0].gold} gold</p>
            <button type='button' onClick={() => setTrain(false)}>закрыть</button>
        </div>
  )
}

export default FinalBattle