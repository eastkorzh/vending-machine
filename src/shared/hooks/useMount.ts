import { useEffectOnce } from "./useEffectOnce";

export const useMount = (fn: () => any) => {
  return useEffectOnce(() => fn());
};
