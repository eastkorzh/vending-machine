import { Amount } from "@/shared/types/amount";
import { BASE_CURRENCY } from "@/shared/constants";
import { createStore } from "effector";

export interface Good {
  name: string;
  price: Amount;
  imageUrl: string;
}

const createGood = ({ name, priceValue }): Good => {
  return {
    name,
    price: {
      value: priceValue,
      currency: BASE_CURRENCY,
    },
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3724/3724763.png",
  };
};

export const initialGoodsDict: { [key: string]: Good } = {
  nucaCola: createGood({ name: "Nuka Cola", priceValue: 3 }),
  baycal: createGood({ name: "Байкал", priceValue: 2 }),
  lays: createGood({
    name: "Lays с соленым огурцом",
    priceValue: 2.3,
  }),
  kholodets: createGood({
    name: "Сухарики с холодцом и хреном",
    priceValue: 1,
  }),
  onogiri: createGood({
    name: "Онигири с тунцом",
    priceValue: 2.8,
  }),
  monster: createGood({
    name: "Monster Mango Loco",
    priceValue: 3,
  }),
  adrenaline: createGood({
    name: "Adrenaline",
    priceValue: 3,
  }),
  triange: createGood({
    name: "Треугольный бутер",
    priceValue: 2.9,
  }),
  baltika: createGood({
    name: "Балтика 0",
    priceValue: 1.7,
  }),
};

export const $goods = createStore(initialGoodsDict);
