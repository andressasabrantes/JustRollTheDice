function rollDice() {
    let scoreEl = document.getElementById('score');
    let diceimg = document.getElementById('diceimg');

    let score = Math.trunc(Math.random() * 6 + 1);

    scoreEl.innerText = score;
    diceimg.src = `dice-${score}.jpg`;
  
}