import React from 'react'
import cl from "./BattleTrain.module.scss";

const GameOver = ({setTrain}) => {
  return (
    <div className={cl.FinalBattle}>
    <h2>Вы проиграли бой</h2>
    <h3>Ваша награда: </h3>
    <p>Опыт: 0</p>
    <p>Золото: 0</p>
    <button type='button' onClick={() => setTrain(false)}>закрыть</button>
</div>
  )
}

export default GameOver