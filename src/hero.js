const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const parent = document.querySelector('#hero');

canvas.width = parent.clientWidth;
canvas.height = parent.clientHeight;

const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 100, canvas.width / 2, canvas.height / 2, canvas.height);
gradient.addColorStop(0, "rgba(255, 255, 255, .2)");
gradient.addColorStop(0.3, "rgba(220, 20, 60, 1)");

let stars = [];
const starsNumber = 120;
const fps = 60;
const starColor = gradient;
const backgroundColor = '#232323';
let mouse = {
    x: 0,
    y: 0
};

canvas.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

for (let i = 0; i < starsNumber; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
        r: Math.random() * 1 + 1,
    });
};

const distance = (point1, point2) => {
    let xs = 0;
    let ys = 0;
    xs = point2.x - point1.x;
    xs = xs * xs;
    ys = point2.y - point1.y;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
};

const draw = () => {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fill();
    });

    ctx.beginPath();
    stars.forEach(star => {
        ctx.moveTo(star.x, star.y);
        if (distance(mouse, star) < 150) ctx.lineTo(mouse.x, mouse.y);
        stars.forEach(star2 => {
            if (distance(star, star2) < 150) {
                ctx.lineTo(star2.x, star2.y);
            };
        });
    });
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = starColor;
    ctx.stroke();
};

const update = () => {
    stars.forEach(star => {
        star.x += star.vx / fps;
        star.y += star.vy / fps;

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
    });
};

const tick = () => {
    draw();
    update();
    requestAnimationFrame(tick);
};

requestAnimationFrame(tick);