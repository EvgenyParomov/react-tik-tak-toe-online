import { GameSymbol } from "./game-symbol"
import styles from './game.module.css'

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return (
      <div className={styles["game-info"]}>
        Ничья
      </div>
    )
  }

  if (winnerSymbol) {
    return (
      <div className={styles["game-info"]}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    )
  }

  return (
    <div className={styles["game-info"]}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  )
}