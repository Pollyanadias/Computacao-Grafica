import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

let model = null;

class Asteroid{
	constructor (){
		this.model = null;
		this.load(this);
	}

	move(){
		if(this.model){
			this.model.position.z += 0.01;

			if(this.model.position.z >= 5){
				this.model.position.z = -20.0;
				let r = Math.random();
				this.model.position.x = -15.0 *  r + 15.0 * (1.0 - r);
				this.model.position.y = -15.0 *  r + 15.0 * (1.0 - r);
			}
		}
	}
	load(object){

		const loader = new GLTFLoader();

		loader.load(
			// resource URL
			'modelo/asteroide.gltf',
			// called when the resource is loaded
			function ( gltf ) {
		
				scene.add( gltf.scene );
				object.model = gltf.scene.children[0];
		
				gltf.animations; // Array<THREE.AnimationClip>
				gltf.scene; // THREE.Group
				gltf.scenes; // Array<THREE.Group>
				gltf.cameras; // Array<THREE.Camera>
				gltf.asset; // Object
		
			},
			// called while loading is progressing
			function ( xhr ) {
		
				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		
			},
			// called when loading has errors
			function ( error ) {
		
				console.log( 'An error happened' );
		
			}
		);
	}
}

let asteroid = new Asteroid();

camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );

	if (asteroid.model != null){
		asteroid.model.rotation.x += 0.05;
		asteroid.model.rotation.y += 0.03;
		asteroid.model.rotation.z -= 0.1;
	}

	asteroid.move();
	
	/*cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;*/
}
renderer.setAnimationLoop( animate );
