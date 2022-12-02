import potion from "../../img/items/potion.png";
import armour from "../../img/items/armour.png";
import crystallBall from "../../img/items/crystallball.png";
import spellbook from "../../img/items/spellbook.png";

export const itemsAll = [
  {
    name: "Лечебное зелье",
    description: "Восстанавливает +50 здоровья",
    price: "150",
    img: potion,
  },
  {
    name: "Броня",
    description: "Прибавляет +200 здоровья",
    price: "450",
    img: armour,
  },
  {
    name: "Книга заклинаний",
    description: "Даёт одно новое умение",
    price: "1340",
    img: spellbook,
  },
  {
    name: "Магическая сфера",
    description: "увеличивает урон х2",
    price: "850",
    img: crystallBall,
  },
  
];
