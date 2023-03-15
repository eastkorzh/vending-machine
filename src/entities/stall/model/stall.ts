import { useStore } from "effector-react";
import { combine } from "effector";
import { $goods, Good } from "./goods";
import { $goodsCount, $goodsPicked } from "./goodsCount";

export interface Stall {
  [key: string]: {
    good: Good;
    count: number;
    picked: number;
  };
}

const $stall = combine(
  { goods: $goods, counts: $goodsCount, picked: $goodsPicked },
  ({ goods, counts, picked }) => {
    const result: Stall = {};
    const goodKeysArr = Object.keys(counts);
    goodKeysArr.forEach((goodKey) => {
      result[goodKey] = {
        good: goods[goodKey],
        count: counts[goodKey],
        picked: picked[goodKey] || 0,
      };
    });
    return result;
  }
);

export const useStall = () => {
  return useStore($stall);
};
