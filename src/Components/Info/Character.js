import magic from "../../img/magic.png";
import honor from "../../img/honor.png";
import warwomen from "../../img/woman.png";
import boar from "../../img/boar.png";
import troll from "../../img/troll.png";
import fireball from "../../img/fireball.png";
import sword from "../../img/sword.png";
import spear from "../../img/spear.png";
import dragon from "../../img/dragon.png";
import skeleton from "../../img/skeleton.png";
import Mutant from "../../img/mutant.png";

export let heroList = [
  {
    name: "Маг",
    img: magic,
    exp: 0,
    level: 1,
    damage: 3,
    armour: 1,
    gold: 0,
    healthPoint: 120,
    manaPoint: 180,
    luck: 1,
    weapon: fireball,
  },
  {
    name: "Воин",
    img: honor,
    exp: 0,
    damage: 1,
    gold: 0,
    level: 1,
    armour: 3,
    healthPoint: 180,
    manaPoint: 80,
    luck: 1,
    weapon: sword,
  },

  {
    name: "Воительница",
    img: warwomen,
    exp: 0,
    damage: 2,
    gold: 0,
    level: 1,
    armour: 2,
    healthPoint: 150,
    manaPoint: 60,
    luck: 1,
    weapon: spear
  },
];

export let monsterList = [
  {
    name: "Boar",
    img: boar,
    damage: 8,
    armour: 1,
    level: 1,
    healthPoint: 100,
    exp: 50,
    gold: 50,
  },
  {
    name: "Troll",
    img: troll,
    damage: 15,
    armour: 3,
    level: 5,
    healthPoint: 150,
    exp: 100,
    gold: 100,
  },
  {
    name: "Skeleton",
    img: skeleton,
    damage: 25,
    armour: 5,
    level: 10,
    healthPoint: 250,
    exp: 200,
    gold: 200,
  },
  {
    name: "Mutant",
    img: Mutant,
    damage: 45,
    armour: 8,
    level: 15,
    healthPoint: 450,
    exp: 200,
    gold: 200,
  },
];
export let bossList = [
  {
    name: "Dragon",
    img: dragon,
    damage: 100,
    armour: 20,
    level: 30,
    healthPoint: 1500,
    exp: 1500,
    gold: 1000,
  },
];
