import { createStore } from "effector";
import { initialGoodsDict } from "./goods";

const goodsKeys = Object.keys(initialGoodsDict);
const goodsCountDict = {};
goodsKeys.forEach((goodKey) => (goodsCountDict[goodKey] = 10));

export const $goodsCount = createStore<{ [goodKey: string]: number }>(
  goodsCountDict
);
export const $goodsPicked = createStore<{ [goodKey: string]: number }>({});
