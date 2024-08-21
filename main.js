import * as THREE from 'three';

/*let vel_h = 0.1;
let vel_v = 0.1;
let vel_t = 0.1;*/

class Cube{
	constructor(cube){
		let min = -0.1;
		let max = 0.1;
		this.vel_h = min + (max - min) * Math.random();
		this.vel_v = min + (max - min) * Math.random();
		this.vel_t = min + (max - min) * Math.random();
		this.cube = cube;
	}

	update(){
		this.cube.position.x += this.vel_h;
		if (this.cube.position.x > 5 || this.cube.position.x < -5 ) {
			this.vel_h = -this.vel_h;
		}
		this.cube.position.y += this.vel_v;
		if (this.cube.position.y > 2 || this.cube.position.y < -2) {
			this.vel_v = -this.vel_v;
		}
		this.cube.position.z += this.vel_t;
		if (this.cube.position.z > 2 || this.cube.position.z < -2) {
			this.vel_t = -this.vel_t
		}
	}
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );

let cubes = [];

for (let i = 0; i < 2; i++){
	const cube = new Cube (new THREE.Mesh( geometry, material ));
	scene.add( cube.cube );
	cubes.push(cube);
}
//const cube = new THREE.Mesh( geometry, material);
//scene.add(cube);


camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );

	for (var cube of cubes)
		cube.update();
	/*
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
	*/
}
renderer.setAnimationLoop( animate );

