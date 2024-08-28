import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material);
scene.add( cube );
scene.add ( cube2 );

camera.position.z = 5;

let arrowUp = false;
let arrowDown = false;
let arrowLeft = false;
let arrowRight = false;
let space = false;

function animate() {
	renderer.render( scene, camera );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube2.position.z -= 0.1;

	if (arrowUp){
		cube.position.y += 0.1;
	}
	if (arrowDown){
		cube.position.y += -0.1;
	}
	if (arrowLeft){
		cube.position.x += -0.1;
	}
	if (arrowRight){
		cube.position.x += 0.1;
	}
	if (space){
		cube2.position.x = cube.position.x;
		cube2.position.y = cube.position.y;
		cube2.position.z = cube.position.z;
	}
}
renderer.setAnimationLoop( animate );

document.addEventListener ("keydown", onDocumenteKeyDown, false)

function onDocumenteKeyDown (event){
	console.log (event.key);
	console.log (event.keyCode);
	switch (event.key){
		case "ArrowUp":
			arrowUp = true;
		break;
		case "ArrowDown":
			arrowDown = true;
		break;
		case "ArrowLeft":
			arrowLeft = true;
		break;
		case "ArrowRight":
			arrowRight = true;
		break;
		case " ":
			space = true;
		break;
	}
}

document.addEventListener ("keyup", onDocumenteKeyUp, false)

function onDocumenteKeyUp (event){
	console.log (event.key);
	console.log (event.keyCode);
	switch (event.key){
		case "ArrowUp":
			arrowUp = false;
		break;
		case "ArrowDown":
			arrowDown = false;
		break;
		case "ArrowLeft":
			arrowLeft = false;
		break;
		case "ArrowRight":
			arrowRight = false;
		break;
		case " ":
			space = false;
		break;
	}
}

