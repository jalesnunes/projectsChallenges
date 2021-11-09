/**********************************************
* Defining start game status                  *
**********************************************/
let isGameActive = true
let currentPlayer = 'X'
let gameState = ['', '', '', '', '', '', '', '', '']

/**********************************************
* These are the conditions that must be match *
* in order to a player win                    *
**********************************************/
const conditionsToWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/**********************************************
* Getting the H1 tag by its ID and it will be *
* store in displayStatus variable             *
**********************************************/
const displayStatus = document.getElementById('status')

/**********************************************
* When a player win this function will be     *
* called to display a message to the winner   *
**********************************************/
const messageToWinner = function () {
  return currentPlayer + "'s wins!"
}

/**********************************************
* Display a draw message                      *
**********************************************/
const drawMessage = function () {
  return 'Draw!'
}

/**********************************************
* Display which player will play at the moment*
**********************************************/
const currentPlayerTurn = function () {
  return `It's ${currentPlayer}'s turn`
}

/***********************************************
* Getting all squares in the table and running *
* a loop to add an event listener to each      *  
* square and once one these squares are clicked*
* the SquareClick function will be called      *
***********************************************/
document.querySelectorAll('.square').forEach(function (square) {
  square.addEventListener('click', SquareClick)
})

/***********************************************
* Getting the restart button and adding an     *
* event listener to the button and once the    *
* it's clicked the RestartGame function will   *
* be called                                    *
***********************************************/
document.querySelector('.restart').addEventListener('click', RestartGame)

/***********************************************
* SquareClick will get the square clicked and  *
* turn string number and parse it int, print X *
* or O in the square clicked and then validate *
* if there is a winner in the current round    *
***********************************************/
function SquareClick(clickedSquareEvent) {
  //Getting the square clicked
  const clickedSquare = clickedSquareEvent.target
  //Parsing string number to int
  const clickedSquareIndex = parseInt(
    clickedSquare.getAttribute('data-cell-index')
  )

  //Verifing if there is already an X or O  in the square clicked and if the game is active
  if (gameState[clickedSquareIndex] !== '' || !isGameActive) {
    return
  }

  //Printing X or O in the square clicked
  SquarePlayed(clickedSquare, clickedSquareIndex)
  //Validate if there is winner
  ValitadedResults()
}

/***********************************************
* SquarePlayed will add X or O to gameState    *
* array* and the priting it to the square      *
* clicked                                      *
***********************************************/
function SquarePlayed(clickedSquare, clickedSquareIndex) {
  gameState[clickedSquareIndex] = currentPlayer
  clickedSquare.innerHTML = currentPlayer
}

/**********************************************
* CurentPlayerTurn being called to display    * 
* a player turn                               *
**********************************************/
displayStatus.innerHTML = currentPlayerTurn()

/**********************************************
* ChangePlayer will be called when X or O     * 
* finish their play                           *
**********************************************/
function ChangePlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }

  displayStatus.innerHTML = currentPlayerTurn()
}

/***********************************************
* ValitadedResults will analyze if the ckicked *
* square with X or O match the              *
* conditionsToWin                              *
***********************************************/
function ValitadedResults() {
  let roundWon = false
  for (let i = 0; i <= 7; i++) {
    const winCondition = conditionsToWin[i]
    let a = gameState[winCondition[0]]
    let b = gameState[winCondition[1]]
    let c = gameState[winCondition[2]]

    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      roundWon = true
      break
    }
  }

  if (roundWon) {
    displayStatus.innerHTML = messageToWinner()
    isGameActive = false
    return
  }

  let roundDraw = !gameState.includes('')

  if (roundDraw) {
    displayStatus.innerHTML = drawMessage()
    isGameActive = false
    return
  }

  ChangePlayer()
}

function RestartGame() {
  isGameActive = true
  currentPlayer = 'X'
  gameState = ['', '', '', '', '', '', '', '', '']

  displayStatus.innerHTML = currentPlayerTurn()
  document.querySelectorAll('.square').forEach(function(square) {
    square.innerHTML = ''
  })
}
