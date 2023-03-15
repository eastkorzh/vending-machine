import { useEvent, useStore } from "effector-react";
import { BASE_CURRENCY } from "@/shared/constants";
import { combine, createEvent, createStore } from "effector";
import { $goods, Good } from "@/entities/stall/model/goods";
import { $rates } from "./fx-rates";

export const availableCurrencies = {
  [BASE_CURRENCY]: BASE_CURRENCY,
  EUR: "EUR",
  RUB: "RUB",
} as const;

export const availableCurrenciesArr = [
  availableCurrencies["USD"],
  availableCurrencies["EUR"],
  availableCurrencies["RUB"],
];

export type AvailableCurrencies = keyof typeof availableCurrencies;

const changeCurrency = createEvent<AvailableCurrencies>();

const $currency = createStore<AvailableCurrencies>(BASE_CURRENCY).on(
  changeCurrency,
  (_, newCurrency) => newCurrency
);

export const useCurrency = () => {
  return [useStore($currency), useEvent(changeCurrency)] as const;
};

$goods.on(changeCurrency, (state, newCurrency) => {
  const rates = $rates.getState();
  const result: { [goodKey: string]: Good } = {};
  const goodKeys = Object.keys(state);
  goodKeys.forEach((goodKey) => {
    const good = state[goodKey];
    result[goodKey] = {
      ...good,
      convertedPrice: {
        value:
          Math.floor(good.basePrice.value * rates[newCurrency] * 100) / 100,
        currency: newCurrency,
      },
    };
  });
  return result;
});
