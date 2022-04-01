// const area = document.getElementsByClassName('area');
const area = document.getElementById('area');
let move = 0;

area.addEventListener('click', e => {
    if(e.target.innerHTML.length !== 0) this.preventDefault();
    e.target.innerHTML = move % 2 === 0 ? "X" : "O";
    move++;
})
console.log(area);