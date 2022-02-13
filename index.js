import * as three from 'https://cdn.skypack.dev/three@0.136.0';
import { PCDLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/PCDLoader.js';

const frame = document.getElementById('faceload');
frame.getAnimations();

const scene  = new three.Scene();
const cam = new three.PerspectiveCamera(50, frame.clientHeight / frame.clientWidth, 0.1, 1000);
const renderer = new three.WebGLRenderer();
renderer.setSize(frame.clientWidth, frame.clientHeight);

window.scene = scene;
window.cam = cam;

cam.position.set(0, -55, 0);
cam.up = new three.Vector3(0,0,-1);
cam.lookAt(new three.Vector3(0,0,0));
frame.appendChild(renderer.domElement);

const loader = new PCDLoader();

loader.load('face-3-3pcd.pcd', (points) => {
        points.geometry.center();
        points.geometry.rotateX( Math.PI );
        points.material.size = 0.2;
        points.material.color.setRGB(1, 0, 1);
        scene.add( points );

});

scene.background = new three.Color('#0f0f0f');

function onWindowResize() {

    cam.aspect = frame.clientWidth / frame.clientHeight;
    cam.updateProjectionMatrix();

    cam.position.set(0, -55, 0);
    cam.up = new three.Vector3(0,0,-1);
    cam.lookAt(new three.Vector3(0,0,0));
    renderer.setSize(frame.clientWidth, frame.clientHeight);
    console.log('a');
}

function animate() {
    requestAnimationFrame( animate );
    let point = scene.children[0];

    if (point !== undefined) {
        if (point.rotation.z < -0.8){
            rotateRate = 0.01;
        }
        else if (point.rotation.z > 0.8){
            rotateRate = -0.01;
        }
         
        point.rotation.z += rotateRate;
    
        renderer.render(scene, cam);
    }


};

window.addEventListener('resize', onWindowResize);
let rotateRate = 0.01

animate();

//May use later
// const geometry = new three.IcosahedronGeometry();
// const wireframe = new three.EdgesGeometry(geometry);
// const line = new three.LineSegments(wireframe);
// line.material.depthTest = false;
// scene.add( line);