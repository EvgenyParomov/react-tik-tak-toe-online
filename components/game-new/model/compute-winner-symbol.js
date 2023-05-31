export function computeWinnerSymbol(gameState, { winnerSequence, nextMove }) {
  return nextMove === gameState.currentMove
    ? gameState.currentMove
    : gameState.cells[winnerSequence?.[0]];
}
