function movePlayer() {
  var player = document.getElementById("player");
  var left = parseInt(player.style.left, 10) || 0;
  var top = parseInt(player.style.top, 10) || 0;

  if (left < 450) {
    player.style.left = (left + 50) + "px";
  }

  if (top < 450) {
    player.style.top = (top + 50) + "px";
  }

  if (left >= 450 && top >= 450) {
    alert("You win!");
  }
}
