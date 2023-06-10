function random() {
    let rand = Math.floor(Math.random() * 6 + 1);
    return rand;
  }
  
  function rollDice() {
    let p1 = random();
    let p2 = random();
  
    document.getElementById("index").textContent = p1;
    document.getElementById("index1").textContent = p2;
  
    if (p1 > p2) {
      document.getElementById("result").textContent = "Player 1 Wins";
    } else if (p1 < p2) {
      document.getElementById("result").textContent = "Player 2 Wins";
    } else {
      document.getElementById("result").textContent = "It's a draw";
    }
  }
  
  // Add event listener to the "Roll Dice" button
  document.getElementById("roll-button").addEventListener("click", rollDice);
  