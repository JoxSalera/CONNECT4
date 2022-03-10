createCells()
const cells = document.querySelectorAll('.cell')
let cellBoard = [...cells]
const winner = document.getElementById('winner')
let player = 'GOLD'

// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')

const winningArrays = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]

// function createCellsStart(){
//   const rowStart = document.querySelector('.start-game')
//   for(let i = 0; i < 7; i++) {
//     const newRowStart = document.createElement('div')
//     newRowStart.classList.add('cell')
//     rowStart.appendChild(newRowStart)
//   }
// }

function createCells(){
  const boardEl = document.querySelector('.grid')
  for(let i = 0; i < 42; i++) {
    const newBoardEl = document.createElement('div')
    newBoardEl.classList.add('cell')
    newBoardEl.setAttribute('i', i)
    boardEl.appendChild(newBoardEl)
  }
}

function cellFall(column) {
  for(let row = 5; row >= 0; row--) {
    const index = row * 7 + column
    const cell = cellBoard[index]

    if(!cell.classList.contains('GOLD') && !cell.classList.contains('PURPLE')) {
      cell.classList.add(player)
      checkWinning(index)
      playerChange()
      return
    }
  }
  } 

  function playerChange() {
    player = player === 'GOLD' ? 'PURPLE' : 'GOLD'
    // console.log(document.documentElement);
    let root = document.documentElement
    root.style.setProperty('--player', player)
  }


function checkWinning(index) {
  for(let i = 0; i < winningArrays.length; i++) {
    const cell1 = cellBoard[winningArrays[i][0]]
    const cell2 = cellBoard[winningArrays[i][1]]
    const cell3 = cellBoard[winningArrays[i][2]]
    const cell4 = cellBoard[winningArrays[i][3]]

    if (
      cell1.classList.contains(player) &&
      cell2.classList.contains(player) &&
      cell3.classList.contains(player) &&
      cell4.classList.contains(player)
    )
    {
      winner.textContent = `${player} WIN!`
  }
}
} 

// for (let i = Math.max(index%7, 0); i < Math.min(7 - index%7, 4); i++) {
//   const fourCells = cellBoard.slice(index - i, index - 1 + 4)
//   console.log("checking", fourCells)
//   if (fourCells[0].classList.contains(player) && fourCells[1].classList.contains(player) && fourCells[2].classList.contains(player) && fourCells[3].classList.contains(player)){
//     console.log('You win!');
//   }
// }

function selectAll(i) {
  console.log('Hello', cellFall, i);
  cellFall(i)
}

function newGame() {
  // console.log(document.querySelectorAll('.cell-start'))
  const select = document.querySelectorAll('.cell-start')
  console.log("document", document)
  console.log("select", select)

  select.forEach((cellStartEL, i) => {
    cellStartEL.addEventListener('click', () => selectAll(i))
  })
}

newGame()