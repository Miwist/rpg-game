import magic from "../../img/magic.png";
import honor from "../../img/honor.png";
import warwomen from "../../img/woman.png";
import boar from "../../img/monsters/boar.png";
import troll from "../../img/monsters/troll.png";
import fireball from "../../img/fireball.png";
import sword from "../../img/sword.png";
import spear from "../../img/spear.png";
import dragon from "../../img/monsters/dragon.png";
import skeleton from "../../img/monsters/skeleton.png";
import Mutant from "../../img/monsters/mutant.png";
import minotaur from "../../img/monsters/minotaur.png";
import devil from "../../img/monsters/devil.png";
import cthulchu from "../../img/monsters/cthulhu.png";
import monstrik from "../../img/monsters/monster.png";

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
    weapon: fireball,
    weaponName: "fireball",
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
    weapon: sword,
    weaponName: "sword",
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
    weapon: spear,
    weaponName: "spear",
  },
];

export let monsterList = [
  {
    name: "Вепрь",
    img: boar,
    damage: 8,
    armour: 12,
    level: 1,
    healthPoint: 100,
    exp: 50,
    gold: 50,
  },
  {
    name: "Тролль",
    img: troll,
    damage: 25,
    armour: 3,
    level: 5,
    healthPoint: 150,
    exp: 100,
    gold: 100,
  },
  {
    name: "Скелет",
    img: skeleton,
    damage: 45,
    armour: 5,
    level: 10,
    healthPoint: 250,
    exp: 150,
    gold: 150,
  },
  {
    name: "Мутант",
    img: Mutant,
    damage: 80,
    armour: 8,
    level: 15,
    healthPoint: 450,
    exp: 200,
    gold: 200,
  },
  {
    name: "Минотавр",
    img: minotaur,
    damage: 220,
    armour: 8,
    level: 20,
    healthPoint: 850,
    exp: 250,
    gold: 250,
  },
  {
    name: "Люци",
    img: devil,
    damage: 450,
    armour: 8,
    level: 30,
    healthPoint: 1250,
    exp: 600,
    gold: 600,
  },
  {
    name: "Ктулху",
    img: cthulchu,
    damage: 700,
    armour: 8,
    level: 35,
    healthPoint: 2250,
    exp: 1600,
    gold: 700,
  },
  {
    name: "Монстрик",
    img: monstrik,
    damage: 1250,
    armour: 8,
    level: 40,
    healthPoint: 11250,
    exp: 3800,
    gold: 1000,
  },
];
export let bossList = [
  {
    name: "Дракон",
    img: dragon,
    damage: 5550,
    armour: 20,
    level: 50,
    healthPoint: 552500,
    exp: 50000,
    gold: 50000,
  },
];
