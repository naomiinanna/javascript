const WIDTH = 3;
const HEIGHT = 3;

function createBoard(width, height) {
    let board = [];
    for (let x = 0; x < width; x++) {
        let column = [];
        for (let y = 0; y < height; y++) {
            column.push(0);
        }
        board.push(column);
    }
    return board;
}

((board, currentPlayer) => {
    function renderBoard(board, currentPlayer) {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('wrapper');
        const $board = document.createElement('div');
        $board.classList.add('board');

        for (let x = 0; x < board.length; x++) {
            let column = board[x];
            const $column = document.createElement('div');
            $column.classList.add('board__column');

            for (let y = 0; y < column.length; y++) {
                const $cell = document.createElement('div');
                $cell.classList.add('board__cell');
                $cell.setAttribute('id', `cell-${x}-${y}`);

                $column.appendChild($cell);

                $cell.addEventListener('click', () => {
                    
                    if(addCircle(x, y, board, currentPlayer)) {
                        updateBoard(board);

                        if(checkWin(board, currentPlayer)) {
                            const $finishText = document.createElement('div');
                            $finishText.classList.add('finish');

                            let tempPlayer;
                            if(currentPlayer == 1) {
                                tempPlayer = 'X';
                            }else{
                                tempPlayer = 'O';
                            }

                            $finishText.innerText = 'Player ' + tempPlayer + ' won';
                            $wrapper.appendChild($finishText);
                            //END GAME HERE?
                        }
                        currentPlayer = currentPlayer == 1 ? 2 : 1;
                    }
                });                  
            }
            $board.appendChild($column);
        }
        document.body.appendChild($wrapper);
        $wrapper.appendChild($board);
    }

    function updateBoard(board) {
        for (let x = 0; x < board.length; x++) {
            for (let y = 0; y < board[x].length; y++) {
                const $cell = document.getElementById(`cell-${x}-${y}`);
                if(board[x][y] == 0) {
                    continue;
                }
                if(board[x][y] == 1) {
                    $cell.innerText = 'x';
                    $cell.classList.add('visible_playerOne');
                }else{
                    $cell.innerText = 'o';
                    $cell.classList.add('visible_playerTwo');
                }
            }            
        }
    }


    function addCircle(columnIndex, rowIndex , board, currentPlayer) {
        if(board[columnIndex][rowIndex] == 0) {
            board[columnIndex][rowIndex] = currentPlayer;
            return true;
        }
        return false;
    }

    function checkWin(board, currentPlayer) {
        return ( 
        (board[0][0] == currentPlayer && board[0][1] == currentPlayer && board[0][2]) == currentPlayer ||
        (board[2][0] == currentPlayer && board[2][1] == currentPlayer && board[2][2]) == currentPlayer ||
        (board[1][0] == currentPlayer && board[1][1] == currentPlayer && board[1][2]) == currentPlayer ||

        (board[0][0] == currentPlayer && board[1][0] == currentPlayer && board[2][0]) == currentPlayer ||
        (board[0][1] == currentPlayer && board[1][1] == currentPlayer && board[2][1]) == currentPlayer ||
        (board[0][2] == currentPlayer && board[1][2] == currentPlayer && board[2][2]) == currentPlayer ||

        (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2]) == currentPlayer);
    }

    window,addEventListener('DOMContentLoaded', () => renderBoard(board, currentPlayer));
})(createBoard(WIDTH, HEIGHT), 1);