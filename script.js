score = 0;
cross = true;
//--------This SetTime For Playing the Music------//

audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
  audio.play();
}, 500);

document.onkeydown = function (e) {
  console.log("key code is: ", e.keyCode);
  if (e.keyCode == 32) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");

    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 1000);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox - 112 + "px";
  }
};
// console.log(score)
setInterval(() => {
  dino = document.querySelector(".dino");
  gameover = document.querySelector(".gameOver");
  obstacles = document.querySelector(".obstacle");
  restart1 = document.querySelector(".restart1");
  overcont = document.querySelector(".overcont");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacles, null).getPropertyValue("left")
  );

  oy = parseInt(
    window.getComputedStyle(obstacles, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY)
  if (offsetX < 80 && offsetY < 50) {
    overcont.style.display = "flex";
    overcont.style.flexDirection = "column";
    overcont.style.justifyContent = "center";
    gameover.style.visibility = "visible";

    gameover.style.fontSize = "200px";
    gameover.style.fontWeigth = "800";
    gameover.style.color = "red";
    gameover.style.textAlign = "center";
    obstacles.classList.remove("obstacleani");
    restart1.style.visibility = "visible";
    restart1.style.fontSize = "100px";
    restart1.style.fontWeigth = "500";
    restart1.style.color = "red";
    restart1.style.margin = "auto";
    restart1.style.border = "none";
    obstacles.classList.remove("obstacleani");
    //-----This SetTimeout For The GameOver-------//
    audiogo.play();
    setTimeout(() => {
      audiogo.play();
      audio.pause();
    }, 1000);
  } else if (offsetX < 80 && offsetX > 0 && cross) {
    score = score + 1 * 10;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 800);
    setTimeout(() => {
      aniDuration = parseFloat(
        window
          .getComputedStyle(obstacles, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDuration - 0.3;
      obstacles.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 100);

function updateScore(score) {
  scorecount.innerHTML = score;
}

function restart(e) {
  window.location.reload();
  

}
