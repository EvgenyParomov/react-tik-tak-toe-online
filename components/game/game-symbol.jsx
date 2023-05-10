import { clsx } from "clsx";
import { SYMBOL_O, SYMBOL_X } from "./constants";

export function GameSymbol({ symbol }) {
  return (
    <span
      className={clsx(
        "text-xl",
        {
          [SYMBOL_O]: "text-green-400",
          [SYMBOL_X]: "text-red-400",
        }[symbol]
      )}
    >
      {symbol}
    </span>
  );
}
