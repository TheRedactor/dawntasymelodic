// 1. THREEJS COSMIC BACKGROUND (STARS + NEBULA)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#cosmicCanvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// ADD GALACTIC PARTICLES
const particles = new THREE.BufferGeometry();
const positions = [];
for (let i = 0; i < 5000; i++) {
    positions.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
    );
}
particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const particleSystem = new THREE.Points(particles, new THREE.PointsMaterial({ size: 0.005, color: '#8F00FF' }));
scene.add(particleSystem);

// 2. GSAP ENTRY ANIMATIONS
gsap.from(".blog-card", {
    duration: 2,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power4.out"
});

// 3. ANIMEJS HOVER EFFECTS
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        anime({
            targets: card,
            scale: 1.05,
            boxShadow: '0 0 50px rgba(143, 0, 255, 0.8)',
            duration: 300
        });
    });
});

// 4. DYNAMIC BLOG SWITCHER (FETCH NEW BLOG EVERY WEEK)
let currentBlogIndex = 0;
const blogs = [
    { title: "The Cosmic Prophecy ✨", content: "In the year 3023..." },
    { title: "War of the Star Kingdoms 🌠", content: "The Andromeda Fleet..." },
    // ADD MORE BLOGS
];

function switchBlog() {
    const blogContainer = document.querySelector('.blog-container');
    blogContainer.innerHTML = `
        <div class="blog-card">
            <h2>${blogs[currentBlogIndex].title}</h2>
            <p>${blogs[currentBlogIndex].content}</p>
        </div>
    `;
    currentBlogIndex = (currentBlogIndex + 1) % blogs.length;
}

// SWITCH EVERY 7 DAYS (DEMO: 10 SECONDS FOR TESTING)
setInterval(switchBlog, 10000); // CHANGE TO 604800000 FOR REAL USE