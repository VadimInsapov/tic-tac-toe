const area = document.getElementById('area');
const reset = document.getElementById('reset');
const resetEndGame = document.getElementById('reset_popup');
const popup = document.getElementById('popup');
let move = 0;
const boxes = () => [].slice.call(document.getElementsByClassName('box'));

area.addEventListener('click', e => {
    if (e.target.innerHTML.length !== 0) return;
    e.target.innerHTML = move % 2 === 0 ? "X" : "O";
    move++;
    check();
})
reset.addEventListener('click', e => startAgain())
resetEndGame.addEventListener('click', e => {
    closePopup();
    startAgain();
})

function startAgain() {
    move = 0;
    boxes().map((item) => item.innerHTML = "");
}

function openPopup() {
    popup.style.visibility = 'visible';
    popup.style.opacity = 1;
}

function closePopup() {
    popup.style.visibility = 'hidden';
    popup.style.opacity = 0;
}

function check() {
    if (move === 9) {
        openPopup();
        document.getElementById('popup__message').innerHTML = "Победила дружба!";
    }
    const winners = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let crosses = [];
    let zeroes = [];
    boxes().map((item, index) => {
        if (item.innerHTML === "X")
            crosses.push(index);
        else if (item.innerHTML === "O")
            zeroes.push(index);
    });
    winners.map((winningCombination) => {
        if (winningCombination.every(item => crosses.includes(item))) {
            openPopup();
            document.getElementById('popup__message').innerHTML = "Победили крестики!"
        }
        if (winningCombination.every(item => zeroes.includes(item))) {
            openPopup();
            document.getElementById('popup__message').innerHTML = "Победили нолики!"
        }
        ;
    })
}
