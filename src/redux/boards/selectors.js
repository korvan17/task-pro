export const selectBoards = state => state.boards.items;

export const selectCurrentBoard = state => state.boards.currentBoard;

export const selectCurrentBoardData = state =>
  state.boards.items[state.boards.currentBoard];
