/**
 * Brahmas Express - Main JS
 * - Three.js Globe Animation
 * - Mobile Menu Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initThreeAnimation();
    initMobileMenu();
});

function initThreeAnimation() {
    const container = document.getElementById('three-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create a wireframe sphere representing a globe
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xD4AF37, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const sphere = new THREE.Mesh(geometry, material);

    // Add a smaller solid sphere inside
    const innerGeometry = new THREE.SphereGeometry(1.4, 32, 32);
    const innerMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x0B1F3A,
        transparent: true,
        opacity: 0.1
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);

    const group = new THREE.Group();
    group.add(sphere);
    group.add(innerSphere);
    scene.add(group);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 4;

    function animate() {
        requestAnimationFrame(animate);
        group.rotation.y += 0.005;
        group.rotation.x += 0.002;
        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}
