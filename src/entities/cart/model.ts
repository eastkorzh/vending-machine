import { $goods } from "@/entities/stall/model/goods";
import { Amount } from "@/shared/types/amount";
import { useStore } from "effector-react";
import { $goodsPicked } from "../stall/model/goodsCount";

interface CartItem {
  goodKey: string;
  name: string;
  picked: number;
  price: Amount;
}

export const $cart = $goodsPicked.map((goodsPicked) => {
  const result: CartItem[] = [];
  const goods = $goods.getState();
  Object.entries(goodsPicked).forEach(([goodKey, picked]) => {
    if (picked) {
      const cartItem: CartItem = {
        goodKey,
        name: goods[goodKey].name,
        picked,
        price: goods[goodKey].convertedPrice || goods[goodKey].basePrice,
      };
      result.push(cartItem);
    }
  });
  return result;
});

export const useCart = () => {
  return useStore($cart);
};
