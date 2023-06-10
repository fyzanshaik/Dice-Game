document.addEventListener('DOMContentLoaded', function() {
  let temp;
function random() {
    let rand = Math.floor(Math.random() * 6 + 1);
    return rand;
  }
  function deleteStars() {
    let stars = document.querySelectorAll(".star");
    
    stars.forEach(function(star) {
      star.remove();
    });
  }
  
  function rollDice() {
    let p1 = random();
    let p2 = random();
  
    document.getElementById("index").textContent = p1;
    document.getElementById("index1").textContent = p2;
    deleteStars();
  
    if (p1 > p2) {
      document.getElementById("result").textContent = "Player 1 Wins";
      temp = p1;
      createStars(p1);
    } else if (p1 < p2) {
      document.getElementById("result").textContent = "Player 2 Wins";
      temp = p2;
      createStars(p2);
    } else {
      temp = p1;
      document.getElementById("result").textContent = "It's a draw";
    }
  }
  
  function createStars(count) {
    let stars = "";
  
    for (let i = 0; i < count; i++) {
      stars += "<div class='star'></div>";
    }
  
    document.body.insertAdjacentHTML("beforeend", stars);
  }
  
  
document.getElementById("roll-button").addEventListener("click", rollDice);
}); 
