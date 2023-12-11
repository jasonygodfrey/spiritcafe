import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { createNoise3D } from 'simplex-noise';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function initializeThreeJS(mountPoint) {
    const clock = new THREE.Clock();


    let mouse = new THREE.Vector2();
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Adjust this value as needed


    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xF5F5DC, 1); // Beige color
    renderer.setClearColor(0xFFC0CB, 1); // Pink color

    mountPoint.appendChild(renderer.domElement);

    // Load the GLTF model
    let mixer; // Animation mixer

    const loader = new GLTFLoader();
    loader.load('sushiresturantkit/scene.gltf', function (gltf) {
        gltf.scene.scale.set(1, 1, 1); // Scale down by 100x
        scene.add(gltf.scene);
        scene.position.x -= 15; // Move the camera 5 units to the right
        scene.position.y -= 3; // Move the camera 5 units to the right
        // Check if the GLTF model has animations
        if (gltf.animations && gltf.animations.length) {
            mixer = new THREE.AnimationMixer(gltf.scene);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play(); // Play the first animation
        }
    }, undefined, function (error) {
        console.error(error);
    });

    // Create an ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Create a directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1); // set the direction of the light
    scene.add(directionalLight);


    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
    );
    bloomPass.threshold = 0.1;
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.1;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    // Render the scene
    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) { // Check if mixer is defined
            mixer.update(delta);
        }
        composer.render(); // Use composer.render() instead of renderer.render()
    }
    animate();
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function zoomOut() {
        camera.position.z += 1; // Move the camera 5 units further away
    }
    function zoomIn() {
        camera.position.z -= 1; // Move the camera 5 units closer
    }
    window.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) { // If the user scrolled down
            zoomOut();
        }
    });
    window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) { // If the user scrolled up
            zoomIn();
        }
    });
}

