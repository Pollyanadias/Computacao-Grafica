import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

for (let j = 1; j < 4; j++) {
	for (let i = 0; i < 8; i++) {
		const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
		const cube = new THREE.Mesh(geometry, material);

		let r = j;
		let theta = (Math.PI / 4.0) * i;

		cube.position.x = r * Math.cos (theta);
		cube.position.y = r * Math.sin (theta);
		cube.position.z = 0;
		
		scene.add(cube);
	}
}

camera.position.z = 5;

function animate() {
	renderer.render(scene, camera);
	/*cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;*/
}
renderer.setAnimationLoop(animate);

