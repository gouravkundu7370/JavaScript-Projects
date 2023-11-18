const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "orange") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.background = e.target.id;
    }
  });
});
