const username = document.getElementById("username");
const email = document.getElementById("email");
const remember = document.getElementById("rememberMe");
const gear1 = document.getElementById("gear1");
const gear2 = document.getElementById("gear2");
const weight = document.getElementById("weight");
const lever = document.getElementById("lever");
const hand = document.getElementById("handMech");

// Animate gears on input
username.addEventListener("input", () => {
  gear1.style.animationPlayState = "running";
});

email.addEventListener("input", () => {
  gear2.style.animationPlayState = "running";
});

// Drop weight on checkbox
remember.addEventListener("change", () => {
  if (remember.checked) {
    weight.style.top = "300px";
  } else {
    weight.style.top = "260px";
  }
});

// Lever + hand move on submit
document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();

  lever.style.transform = "translateX(-50%) rotate(15deg)";
  hand.style.transform = "translateY(-10px)";

  setTimeout(() => {
    lever.style.transform = "translateX(-50%) rotate(-15deg)";
    hand.style.transform = "translateY(0)";
    alert("Login Triggered (Visual Only)");
  }, 1000);
});
