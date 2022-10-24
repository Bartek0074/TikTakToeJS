const cells = document.querySelectorAll('.cell');

let player = 'x';

const cellMouseEnter = e => {
    if (e.target.innerHTML === '') {
        player === 'x' ? 
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

cells.forEach(cell => cell.addEventListener('mouseenter', e => cellMouseEnter(e)));

cells.forEach(cell => cell.addEventListener('mouseleave', e => cellMouseLeave(e)));