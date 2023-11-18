const form = document.querySelector("form");
const remarks = document.querySelector("#weight-guide");
remarks.querySelector("h3").style.display = "none";
remarks.querySelectorAll("p").forEach((i) => (i.style.display = "none"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  remarks.querySelector("h3").style.display = "none";
  remarks.querySelectorAll("p").forEach((i) => (i.style.display = "none"));

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      remarks.querySelector("h3").style.display = "block";
      remarks.querySelector("#udwt").style.display = "block";
    }
    if (bmi > 18.6 && bmi <= 24.9) {
      remarks.querySelector("h3").style.display = "block";
      remarks.querySelector("#nrml").style.display = "block";
    }
    if (bmi > 24.9) {
      remarks.querySelector("h3").style.display = "block";
      remarks.querySelector("#ovrwt").style.display = "block";
    }
  }
});
