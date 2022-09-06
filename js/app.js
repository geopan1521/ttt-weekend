/*-------------------------------- Constants --------------------------------*/





/*---------------------------- Variables (state) ----------------------------*/
let board, winner, turn

winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 8, 7],
    [6, 4, 2],
    [8, 4, 0],
    [0, 8, 4],
    [4, 6, 2],
    [8, 5, 2],
    [5, 2, 8],
    [4, 8, 0],
    [1, 0, 2],
    [4, 2, 6],
    [7, 6, 8],
    [7, 8, 6],
    [4, 0, 8],
    [6, 2, 4],
    [2, 1, 0],
    [2, 0, 1],
    [1, 2, 0],
    [0, 2, 1],
    [8, 7, 6],
    [8, 6, 7],
    [6, 7, 8],
    [3, 5, 4],
    [4, 5, 3],
    [5, 4, 3],
    [5, 3, 4],
    [7, 1, 4],
    [7, 4, 1],
    [4, 1, 7],
    [6, 3, 0],
    [3, 0, 6],
    [3, 6, 0],
    [4, 3, 5],
    [4, 7, 1],
    [1, 7, 4]   
]
    




/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('section > div')
console.log(squareEls)

const messageEl = document.getElementById('message')
console.log(messageEl)

const reset = document.getElementById('reset-button')

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square=> {
    square.addEventListener('click', handleClick)
})

reset.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/

init()
function init() {
    console.log('init')
    board = [null, null, null, null, null, null, null, null, null]
    winner = null
    turn = 1
    render()    
}

function render() {
    board.forEach((square, idx) => {
    squareEls[idx].innerText = square
    if(board[idx] === 1) {
        console.log(messageEl)
        squareEls[idx].textContent = 'X'
        } if (board[idx] === -1) {
            console.log(messageEl)
            squareEls[idx].textContent = 'O'
        } if (board[idx] === null) {
        squareEls[idx].innerText = ''
    }
    }) 

    if (!winner) {
    console.log(messageEl)
    messageEl.textContent = `Player ${turn === 1 ? 'O' : 'X'} turn` 
    
    } else if (winner === 'T') {
    console.log(messageEl)
    messageEl.textContent = `Tie`
    
    } else {
    console.log(messageEl)
    messageEl.textContent = `Player ${winner === 1 ? 'X' : 'O'} wins`
    confetti.start(2000)
    }
    
}

function handleClick(evt) {
    let sqIDX = parseInt(evt.target.id.replace('sq',' '))
    if(board[sqIDX] || !winner === null) {
        return
    }
    board[sqIDX] = turn *= -1
    getWinner()
    render()
    console.log(board[sqIDX])
}

function getWinner() {
    winningCombos.forEach(winningCombo => {
    let points = 0
    winningCombo.forEach(idx => {
        points += board[idx]
    })
    if (points === 3) {
        return winner = 1
    } else if (points === -3) {
        return winner = -1
    } else {
        if(board.some(square =>
        square === null
        )===false){
        return winner = 'T'
    }
  }})
  render()
} 

