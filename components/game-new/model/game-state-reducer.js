import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  currentMoveStart,
  playersCount,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
        cells: updateCell(state, index),
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action;

      if (!isTimeOver(state, now)) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
      };
    }
    default: {
      return state;
    }
  }
};

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}

function updateCell(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentMove : cell
  );
}

function isTimeOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];

  return timer <= 0;
}
