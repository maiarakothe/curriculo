/* mensagem de boas vindas */
const formulario = document.getElementById("form-contato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

window.addEventListener("load", function () {
    alert("Olá! Seja bem-vindo(a) ao meu portfólio! Fique à vontade para explorar e conhecer mais sobre mim e meu trabalho.");
});

/* envio do formulário */

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    mensagemSucesso.innerText =
        `Obrigada pela mensagem, ${nome}! Em breve entrarei em contato.`;

    formulario.reset();
});

/* uso de Canvas */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    radius: Math.random() * 2.5 + 1,
}));

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 92, 145, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(232, 92, 145, ${0.25 * (1 - dist / 120)})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animate);
}

animate();