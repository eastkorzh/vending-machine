import { EffectCallback, useEffect, useRef } from "react";

export function useEffectOnce(callback: EffectCallback) {
  const didRun = useRef(false);
  useEffect(() => {
    if (!didRun.current) {
      callback();
      didRun.current = true;
    }
  }, []);
}
