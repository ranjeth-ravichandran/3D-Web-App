# 3D Web Application
A simple web app built with Three.js this is a learning experience and documentation of my learning.

## Steps
```js
import * as THREE from 'three';
```

```bash
# three.js
npm install --save three

# vite
npm install --save-dev vite
```
The public folder holds all the static data, such as images, textures, audio, 3d objects, etc.
The src folder within vite is used to hold JS/TS/CSS files, where as the index.html is the template and foundation of the webpage is stored in the root directory for the page to load.

## Displaying Text (DOM, CSS2DRenderer, CSS3DRenderer)
When adding DOM elements using fullscreen THREE.js scene, make sure to use `position:absolute;` otherwise the content on the page will distort.

## Resizing Scene based on the Window Change
```js
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
```




# Resources
- [Three.js](https://threejs.org/manual/#en/creating-a-scene)
- [Vite](https://vite.dev/)
- [Model Viewer](https://modelviewer.dev/)
- [Blender](https://www.blender.org/)