// Toggle Dark Mode
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');
    const posts = document.querySelectorAll('.posts article');
    posts.forEach(post => post.classList.toggle('dark-mode'));
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.toggle('dark-mode');
    const footer = document.querySelector('footer');
    footer.classList.toggle('dark-mode');
});

// Animations on Load
document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation
    anime({
        targets: '.hero',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 200,
    });

    // Posts Animation
    anime({
        targets: '.posts article',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 1200,
        easing: 'easeOutExpo',
    });

    // Image Hover Effects
    document.querySelectorAll('.posts article img').forEach(img => {
        img.addEventListener('mouseover', () => {
            anime({
                targets: img,
                scale: [1, 1.1],
                duration: 500,
                easing: 'easeInOutSine',
                loop: true,
            });
        });
        img.addEventListener('mouseout', () => {
            anime({
                targets: img,
                scale: [1.1, 1],
                duration: 500,
                easing: 'easeInOutSine',
                loop: false,
            });
        });
    });

    // Contact Form Animation
    anime({
        targets: '.contact form',
        scale: [0.95, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 400,
    });

    // Footer Animation
    anime({
        targets: 'footer',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 600,
    });
});

// Scroll Animations
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.posts article').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            anime({
                targets: el,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo',
                delay: anime.stagger(200),
            });
        }
    });
});

// Dynamic Navbar Animations
document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const header = document.querySelector('header');

    if (scrollTop > 50) {
        anime({
            targets: header,
            backgroundColor: '#333',
            duration: 400,
            easing: 'easeOutSine',
        });
    } else {
        anime({
            targets: header,
            backgroundColor: 'linear-gradient(90deg, #ff6f61, #f2c14e)',
            duration: 400,
            easing: 'easeOutSine',
        });
    }
});
