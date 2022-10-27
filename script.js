const cells = document.querySelectorAll('.cell');
const winningMessageTxt = document.querySelector('[data-winning-message-text]')
const winningMessage = document.querySelector('.winning-message');
const restartBtn = document.querySelector('.restartBtn');

let crossTurn = true;

const circleClass = 'o';
const crossClass = 'x';

const circleHoverInnerHTML = '<i class="hover fa-solid fa-o"></i>';
const crossHoverInnerHTML = '<i class="hover fa-solid fa-x"></i>';
const circleMarkInnerHTML = '<i class="mark fa-solid fa-o"></i>';
const crossMarkInnerHTML = '<i class="mark fa-solid fa-x"></i>';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cellMouseEnter = e => {
    const cell = e.target;

    if (cell.innerHTML === '') {
        crossTurn ? cell.innerHTML = crossHoverInnerHTML : cell.innerHTML = circleHoverInnerHTML
    }
}

const cellMouseLeave = e => {
    const cell = e.target

    if (cell.innerHTML === crossHoverInnerHTML || cell.innerHTML === circleHoverInnerHTML) {
        cell.innerHTML = ''
    }
}

const placeMark = (cell) => {
    if (cell.parentElement.innerHTML === crossHoverInnerHTML) {
        cell.parentElement.classList.add(crossClass);
        cell.parentElement.innerHTML = crossMarkInnerHTML;
    }
    else if (cell.parentElement.innerHTML === circleHoverInnerHTML) {
        cell.parentElement.classList.add(circleClass);
        cell.parentElement.innerHTML = circleMarkInnerHTML;
    }
}

const checkWin = (currentClass) => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass)
        })
    })
}

const checkDraw = () => {
    return [...cells].every(cell => {
        return cell.classList.contains(circleClass) || cell.classList.contains(crossClass)
    })
}

const endGame = (draw) => {
    if (draw) {
        winningMessageTxt.innerText = "It's a draw";
    }
    else {
        winningMessageTxt.innerText = `${crossTurn ? "X's wins!" : "O's wins!"}`;
    }
    winningMessage.classList.add('show');
}

const swapTurns = () => {
    crossTurn = !crossTurn;
}

const cellClick = e => {
    const cell = e.target;
    const currentClass = crossTurn ? crossClass : circleClass;

    placeMark(cell);

    if(checkWin(currentClass)) {
        endGame(false)
    }
    else if (checkDraw()) {
        endGame(true)
    }
    else {
        swapTurns()
    }
}

const restartGame = () => {
    cells.forEach(cell => {
        crossTurn = true;
        cell.classList.remove(circleClass);
        cell.classList.remove(crossClass);
        cell.innerHTML = '';
        winningMessage.classList.remove('show');
        cell.addEventListener('click', e => cellClick(e), { once: true })
    })
}

cells.forEach(cell => cell.addEventListener('mouseenter', e => cellMouseEnter(e)));

cells.forEach(cell => cell.addEventListener('mouseleave', e => cellMouseLeave(e)));

cells.forEach(cell => cell.addEventListener('click', e => cellClick(e), { once: true }));

restartBtn.addEventListener('click', restartGame);