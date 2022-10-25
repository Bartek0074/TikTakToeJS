const cells = document.querySelectorAll('.cell');

let playerTurn = 'x';

const cellMouseEnter = e => {
    if (e.target.innerHTML === '') {
        playerTurn === 'x' ? 
        e.target.innerHTML = '<i class="hover fa-solid fa-x"></i>' : 
        e.target.innerHTML = '<i class="hover fa-solid fa-o"></i>'
    }
}

const cellMouseLeave = e => {
    if (e.target.innerHTML === '<i class="hover fa-solid fa-o"></i>' 
    || e.target.innerHTML === '<i class="hover fa-solid fa-x"></i>') {
        e.target.innerHTML = ''
    }
}

const placeMark = (e) => {
    if (e.target.parentElement.innerHTML === '<i class="hover fa-solid fa-x"></i>') {
        e.target.parentElement.innerHTML = '<i class="mark fa-solid fa-x"></i>'
    }
    else if (e.target.parentElement.innerHTML === '<i class="hover fa-solid fa-o"></i>') {
        e.target.parentElement.innerHTML = '<i class="mark fa-solid fa-o"></i>'
    }
}

const cellClick = e => {
    placeMark(e);
    swapTurns();
}

const swapTurns = () => {
    playerTurn === 'x' ? playerTurn = 'o' : playerTurn = 'x'
}

cells.forEach(cell => cell.addEventListener('mouseenter', e => cellMouseEnter(e)));

cells.forEach(cell => cell.addEventListener('mouseleave', e => cellMouseLeave(e)));

cells.forEach(cell => cell.addEventListener('click', e => cellClick(e)));