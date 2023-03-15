import { BASE_CURRENCY, OPENEXCHANGERATES_API_KEY } from "@/shared/constants";
import { createEffect, createStore } from "effector";
import { useEvent, useStore } from "effector-react";

interface Rates {
  [currency: string]: number;
}

const getRatesFx = createEffect(async (baseCurrency = BASE_CURRENCY) => {
  const url = `latest.json?app_id=${OPENEXCHANGERATES_API_KEY}&base=${baseCurrency}`;
  const base = "https://openexchangerates.org/api";
  const res = await fetch(`${base}/${url}`);
  const data = await res.json();
  return data.rates as Rates;
});

const $rates = createStore<Rates>({}).on(
  getRatesFx.doneData,
  (_, data) => data
);

const $ratesArr = createStore<[string, number][]>([]).on(
  getRatesFx.doneData,
  (_, data) => Object.entries(data)
);

export const useGetRates = () => {
  return useEvent(getRatesFx);
};

export const useGetRatesLoading = () => {
  return useStore(getRatesFx.pending);
};

export const useRatesStore = () => {
  return useStore($rates);
};

export const useRatesArrStore = () => {
  return useStore($ratesArr);
};
