window.addEventListener("keyup", function (event) {
  let code = event.keyCode.toString();
  let audio = document.querySelector(`audio[data-key="${code}"]`);

  let key = document.querySelector(`div[data-key="${code}"]`);

  if (!audio || !key) {
    return;
  }

  key.classList.add("Beat-Pop");

  audio.currentTime = 0;
  audio.play();
});

function removeTransition(evt) {
  if (evt.propertyName !== "transform") return;
  this.classList.remove("Beat-Pop");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
