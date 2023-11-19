const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startChange = () => {
  const changeColor = () => {
    document.body.style.backgroundColor = randomColor();
  };
  if (!interval) {
    interval = setInterval(changeColor, 1000);
  }
};
const stopChange = () => {
  clearInterval(interval);
  interval = null;
};
document.querySelector("#start").addEventListener("click", startChange);
document.querySelector("#stop").addEventListener("click", stopChange);
