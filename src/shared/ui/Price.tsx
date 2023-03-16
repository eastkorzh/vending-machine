import React from "react";
import { Amount } from "../types/amount";

export const Price: React.FC<{ amount: Amount }> = ({ amount }) => {
  return (
    <span>
      {Math.floor(amount.value * 100) / 100} {amount.currency}
    </span>
  );
};
