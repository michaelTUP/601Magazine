// main.js
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const papers = Array.from(document.querySelectorAll(".paper"));

let current = 0; // 0 = before first front

function showNext() {
  if (current >= papers.length * 2) return;
  const index = Math.floor(current / 2);
  papers[index].classList.add("flipped");
  current++;
}

function showPrev() {
  if (current <= 0) return;
  current--;
  const index = Math.floor(current / 2);
  papers[index].classList.remove("flipped");
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);
