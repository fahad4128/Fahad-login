const gear1 = document.querySelector('.gear1');
const gear2 = document.querySelector('.gear2');
const weight = document.querySelector('.weight');
const lever = document.querySelector('.lever');
const hand = document.querySelector('.robot-hand');
const checkbox = document.getElementById('rememberMe');
const username = document.getElementById('username');
const email = document.getElementById('email');

username.addEventListener('input', () => {
  gear1.style.animationPlayState = 'running';
});
email.addEventListener('input', () => {
  gear2.style.animationPlayState = 'running';
});

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    weight.style.top = '200px';
  } else {
    weight.style.top = '160px';
  }
});

document.getElementById('submitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  lever.style.transform = 'rotate(15deg)';
  hand.style.transform = 'translateY(-10px)';

  setTimeout(() => {
    lever.style.transform = 'rotate(-15deg)';
    hand.style.transform = 'translateY(0px)';
    alert("Login simulated visually!");
  }, 1000);
});