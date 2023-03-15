import React from "react";
import { Amount } from "../types/amount";

export const Price: React.FC<{ amount: Amount }> = ({ amount }) => {
  return (
    <span>
      {amount.value} {amount.currency}
    </span>
  );
};
