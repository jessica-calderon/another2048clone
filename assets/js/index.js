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