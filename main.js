
function moveBars() {
  let i = 0;
  if (i == 0) {
    i = 1;
    let bars = document.getElementsByClassName("progress-bar");
    let labels = document.getElementsByClassName("progress-label");
    let width = 50;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        for (let j = 0; j < labels.length; j++) {          
          bars[j].style.width = width + "%";
          bars[j].dataset.percent = width + "%";
          labels[j].innerHTML = width + "%";
        }
      }
    }
  }
}

window.onload = function () {
  let finishBtn = document.getElementById("finish-button");
  finishBtn.addEventListener("click", moveBars);
};
