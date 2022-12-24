import potion from "../../img/items/potion.png";
import armour from "../../img/items/armour.png";
import crystallBall from "../../img/items/crystallball.png";
import spellbook from "../../img/items/spellbook.png";

export let itemsAll = [
  {
    name: "Лечебное зелье",
    description: "Восстанавливает +50 здоровья",
    price: 150,
    img: potion,
    id: 0,
  },
  {
    name: "Броня",
    description: "Прибавляет +200 здоровья",
    price: 450,
    img: armour,
    id: 1,
  },
  {
    name: "Книга заклинаний",
    description: "Даёт одно новое умение",
    price: 1340,
    img: spellbook,
    id: 2,
  },
  {
    name: "Магическая сфера",
    description: "увеличивает урон х2",
    price: 850,
    img: crystallBall,
    id: 3,
  },
];

localStorage.setItem("score", JSON.stringify(itemsAll))