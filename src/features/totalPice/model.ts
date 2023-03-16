import { $cart } from "@/entities/cart/model";
import { Amount } from "@/shared/types/amount";
import { useStore } from "effector-react";

const $totalPrice = $cart.map<Amount | null>((cart) => {
  if (!cart) {
    return null;
  }
  const totalValue = cart
    .map((cartItem) => cartItem.price.value * cartItem.picked)
    .reduce((prev, curr) => prev + curr);
  const currency = cart[0].price.currency;
  return {
    value: totalValue,
    currency,
  };
});

export const useTotalPrice = () => {
  return useStore($totalPrice);
};
