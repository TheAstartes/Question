const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const body = document.getElementById('body-bg');
const quizContainer = document.getElementById('quiz-container');
const celebration = document.getElementById('celebration');

let yesFontSize = 1.2;

// 1. The "No" Button escape logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Make the Yes button grow every time she tries to click No
    yesFontSize += 2;
    yesBtn.style.fontSize = `${yesFontSize}rem`;
    yesBtn.style.padding = `${15 + (yesFontSize * 5)}px ${30 + (yesFontSize * 10)}px`;
});

// 2. The "Yes" Button click logic
yesBtn.addEventListener('click', () => {
    // Change background to "Happy"
    body.classList.add('celebrate');
    
    // Switch views
    quizContainer.classList.add('hidden');
    celebration.classList.remove('hidden');

    // Trigger the custom Dark/Blue/Raven/Kitty Confetti
    fireConfetti();

    // OPTIONAL: Open WhatsApp automatically
    // const phone = "1234567890"; // Put your number here
    // const msg = encodeURIComponent("I'd love to be your Valentine! 🖤💙");
    // window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
});

function fireConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    (function frame() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) return;

        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#000000', '#0000FF'], // Black and Blue base
            shapes: ['text'],
            shapeOptions: {
                text: {
                    value: ['🖤', '💙', '🐦‍⬛', '🐈‍⬛', '🐈', '🦇'], // Your specific theme
                },
            },
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            shapes: ['text'],
            shapeOptions: {
                text: {
                    value: ['🖤', '💙', '🐦‍⬛', '🐈‍⬛', '🐈', '🦇'],
                },
            },
        });

        requestAnimationFrame(frame);
    }());
}