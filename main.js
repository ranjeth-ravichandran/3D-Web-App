import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
// The perspective camera is what is used to see the objects on the scene, such as a camera in Blender.
// The FOV (field of view) shows the size of scene depending on the degrees.
// Aspect Ratio, always use the width of the element / height of element. Otherwise the scene will look squished.
// Near and Far, these are clipping planes. Objects further than the clipping planes will not be rendered, this improves performance.

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x202020); // Dark gray background
document.body.appendChild( renderer.domElement );

// Creating materials, object size, implementing those onto the cube.
// Then adding the object onto the scene.
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00eeff } );

var objects = [];
objects.push(new THREE.Mesh( new THREE.SphereGeometry(0.8, 32, 16, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshBasicMaterial( { color: 0xaa3333 } ) ));
objects.push(new THREE.Mesh( geometry, material));
objects.push(new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x00ffaa } ) ));

objects.forEach(cube => {
  scene.add( cube ); // Adds the object onto the scene at 0,0,0
});

objects[0].position.set(-2, 0, 0); // Sets the x y z values of an object.
objects[2].position.set(2, 0 ,0);

camera.position.z = 5; // Moves the camera back to see the objects instead of clipping through.

// This renders the camera and the objects in the scene.
// The renderer is like an animation loop but used within OpenGL which is more suitable for Three.js
function animate() {
  objects.forEach(object => {
    object.rotation.x += 0.002;
    object.rotation.y += 0.002;
  });

  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

// Setup resize listener
// Calls the function onWWindowResize based on the window change
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  // Adjust camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Adjust renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
}