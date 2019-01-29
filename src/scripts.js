// HERO
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const parent = document.querySelector('#hero');

canvas.width = parent.clientWidth;
canvas.height = parent.clientHeight;

ctx.fillStyle = '#232323';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let stars = [];
const starsNumber = 100;
const fps = 60;

for (let i = 0; i < starsNumber; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
        r: Math.random() * 1 + 1,
    });
};