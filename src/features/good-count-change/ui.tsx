import { IconButton } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import * as model from "./model";

interface GoodCountChange {
  goodKey: string;
  picked: number;
  count: number;
}

export const GoodCountChange: React.FC<GoodCountChange> = ({
  goodKey,
  picked,
  count,
}) => {
  const handleCount = model.useChangeGoodCount();

  return (
    <>
      <IconButton size="medium" onClick={() => handleCount.decrease(goodKey)}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <div>
        Количество: {picked}/{count}
      </div>
      <IconButton size="medium" onClick={() => handleCount.increase(goodKey)}>
        <AddCircleIcon />
      </IconButton>
    </>
  );
};
