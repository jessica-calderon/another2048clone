// set initial board variable
var board;
// start score at 0
var score = 0;
// set rows and columns value to 4x4
var rows = 4;
var columns = 4;

// call function to set game board on load
window.onload = function() {
    setBoard();
}
// set board values to 0 all across to start
function setBoard() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
}
// for loop to handle tile numbers on board
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
        let tile = document.createElement("div");
        tile.id = r.toString() + "-" + c.toString();
        let number = board[r][c];
        updateTile(tile, number);
        document.getElementById("board").append(tile);
    }
}