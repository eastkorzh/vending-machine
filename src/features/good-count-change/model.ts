import { useEvent } from "effector-react";
import { $goodsPicked } from "@/entities/stall/model/goodsCount";
import { createEvent } from "effector";

type GoodKey = string;

const increaseGoodCount = createEvent<GoodKey>();
const decreaseGoodCount = createEvent<GoodKey>();

$goodsPicked.on(increaseGoodCount, (state, goodKey) => {
  const picked = state[goodKey] || 0;
  return {
    ...state,
    [goodKey]: picked + 1,
  };
});

$goodsPicked.on(decreaseGoodCount, (state, goodKey) => {
  const picked = state[goodKey] || 0;
  return {
    ...state,
    [goodKey]: picked - 1,
  };
});

export const useChangeGoodCount = () => {
  return {
    increase: useEvent(increaseGoodCount),
    decrease: useEvent(decreaseGoodCount),
  };
};
