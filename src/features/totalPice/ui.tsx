import { Price } from "@/shared/ui/Price";
import React from "react";
import { Typography } from "@mui/material";
import { useTotalPrice } from "./model";

export const TotalPrice = () => {
  const totalPrice = useTotalPrice();
  if (!totalPrice) return null;
  return (
    <Typography variant="h5">
      Итого: <Price amount={totalPrice} />
    </Typography>
  );
};
