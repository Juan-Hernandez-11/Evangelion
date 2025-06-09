import * as THREE from './libs/three/three.module.js';
import { GLTFLoader } from './libs/three/GLTFLoader.js';
import { OrbitControls } from './libs/three/OrbitControls.js';

function initViewer(containerId, modelPath) {
  const container = document.getElementById(containerId);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444);
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load(modelPath, function (gltf) {
    const model = gltf.scene;
    model.scale.set(1.5, 1.5, 1.5);
    scene.add(model);
    animate();
  }, undefined, function (error) {
    console.error(`Error cargando modelo ${modelPath}`, error);
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  camera.position.set(0, 1.5, 3);
  controls.update();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
}

// Inicializa los 3 viewers
initViewer('eva00-viewer', 'models/eva00.glb');
initViewer('eva01-viewer', 'models/eva01.glb');
initViewer('eva02-viewer', 'models/eva02.glb');
