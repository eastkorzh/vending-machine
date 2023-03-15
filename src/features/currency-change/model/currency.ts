import { useEvent, useStore } from "effector-react";
import { BASE_CURRENCY } from "@/shared/constants";
import { createEvent, createStore } from "effector";

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
