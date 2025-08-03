let showingFront = true;
function flipCard() {
  const front = document.getElementById("card-front");
  const back = document.getElementById("card-back");
  if (showingFront) {
    front.classList.add("hidden");
    back.classList.remove("hidden");
  } else {
    back.classList.add("hidden");
    front.classList.remove("hidden");
  }
  showingFront = !showingFront;
}