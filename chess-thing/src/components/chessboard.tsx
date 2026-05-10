// Pieces
// 0 = empty
// 1 = white pawn
// 2 = white knight
// 3 = white bishop
// 4 = white rook
// 5 = white queen
// 6 = white king
// -1 = black pawn
// -2 = black knight
// -3 = black bishop
// -4 = black rook
// -5 = black queen
// -6 = black king
export function chessBoard() {

  let board = [
                        [[-4,-2,-3,-5,-6,-3,-2,-4],
                        [-1,-1,-1,-1,-1,-1,-1,-1],
                        [ 0, 0, 0, 0, 0, 0, 0, 0],
                        [ 0, 0, 0, 0, 0, 0, 0, 0],
                        [ 0, 0, 0, 0, 0, 0, 0, 0],
                        [ 0, 0, 0, 0, 0, 0, 0, 0],
                        [ 1, 1, 1, 1, 1, 1, 1, 1],
                        [ 4, 2, 3, 5, 6, 3, 2, 4]]];
  <p>Chess Board</p>
  return board;
}
