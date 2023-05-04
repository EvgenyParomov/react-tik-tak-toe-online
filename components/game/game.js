import { GameCell } from './game-cell'
import { GameInfo } from './game-info'
import styles from './game.module.css'
import { useGameState } from './use-game-state';


export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell
  } = useGameState();

  return (
    <div className={styles['game']}>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className={styles["game-field"]}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <button className={styles["reset"]} onClick={resetGame}>Сбросить</button>
    </div>
  )
}
