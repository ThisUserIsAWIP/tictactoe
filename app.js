let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let counter = 0; counter < cells.length;

function cellClicked(event) {
    if (counter % 2 === 0) {
        if (event.target.textContent === '') {
            event.target.textContent = 'X';
            counter++;
        }
        
    }
    else {
        if (event.target.textContent === '') {
            event.target.textContent = 'O';
            counter++;
        }
    }
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X')  {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textcontent === 'X') {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[6].textContent === 'X' && cells[4].textContent === 'X' && cells[2].textContent === 'X') {
        alert('X wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O')  {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textcontent === 'O') {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    } else if (cells[6].textContent === 'O' && cells[4].textContent === 'O' && cells[2].textContent === 'O') {
        alert('O wins!');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = ''}
    }
}

