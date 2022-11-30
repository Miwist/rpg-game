import magic from "../../img/magic.png";
import honor from "../../img/honor.png";
import warwomen from "../../img/woman.png";
import boar from "../../img/boar.png";
import fireball from "../../img/fireball.png";
import sword from "../../img/sword.png";

export let heroList = [
  {
    name: "Wizzard",
    img: magic,
    exp: 0,
    level: 1,
    damage: 3,
    armour: 1,
    gold: 0,
    healthPoint: 120,
    manaPoint: 180,
    luck: 1,
    sword: fireball,
  },
  {
    name: "Warrior",
    img: honor,
    exp: 0,
    damage: 1,
    gold: 0,
    level: 1,
    armour: 3,
    healthPoint: 180,
    manaPoint: 80,
    luck: 1,
    sword: sword,
  },

  {
    name: "Warwoman",
    img: warwomen,
    exp: 0,
    damage: 2,
    gold: 0,
    level: 1,
    armour: 2,
    healthPoint: 150,
    manaPoint: 60,
    luck: 1,
  },
];

export let monsterList = [
  {
    name: "Boar",
    img: boar,
    damage: 2,
    armour: 1,
    level: 1,
    healthPoint: 100,
    exp: 50,
    gold: 50,
  },
];
export let BossList = [];
