import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import * as currencyModel from "../model/currency";

export const SelectCurrency = () => {
  const [selectedCurrency, changeCurrency] = currencyModel.useCurrency();

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      {currencyModel.availableCurrenciesArr.map((item) => {
        return (
          <Button
            key={item}
            variant={selectedCurrency === item ? "contained" : "outlined"}
            onClick={() => changeCurrency(item)}
          >
            {item}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
