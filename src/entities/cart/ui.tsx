import { Price } from "@/shared/ui/Price";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useCart } from "./model";

export const CartList: React.FC = () => {
  const cart = useCart();
  return (
    <Stack spacing={1}>
      {cart.map((cartItem) => {
        return (
          <Typography key={cartItem.goodKey}>
            {cartItem.name} {cartItem.picked} *{" "}
            <Price amount={cartItem.price} /> ={" "}
            <Price
              amount={{
                ...cartItem.price,
                value: cartItem.picked * cartItem.price.value,
              }}
            />
          </Typography>
        );
      })}
    </Stack>
  );
};
