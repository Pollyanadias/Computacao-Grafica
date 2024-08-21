import * as THREE from 'three';

let vel_h = 0.2;
let vel_v = 0.1;
let vel_t = 0.3;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );
	cube.position.x += vel_h;
	cube.position.y += vel_v;
	cube.position.z += vel_t;

	if (cube.position.x > 5 || cube.position.x < -5 ) {
		vel_h = -vel_h;
	}

	if (cube.position.y > 2 || cube.position.y < -2) {
		vel_v = -vel_v;
	}

	if (cube.position.z > 2 || cube.position.z < -2) {
		vel_t = -vel_t
	}
}
renderer.setAnimationLoop( animate );

