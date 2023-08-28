export const selectBoards = state => state.boards;

export const selectCurrentBoard = state => state.boards.currentBoard;

export const selectCurrentBoardData = state =>
  state.boards[state.boards.currentBoard];
