import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState(playersCount) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    })
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  };
}
