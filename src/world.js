import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
//import {OrbitControls} from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
import $ from "jquery";
import * as TWEEN from "@tweenjs/tween.js";

const mouse={
  x: undefined,
  y: undefined
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

//const raycaster = new THREE.Raycaster();
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75, innerWidth/innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

//Set camera position to see objects
//camera.position.z=2;
camera.position.set(0,0, .7);

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

//new OrbitControls(camera, renderer.domElement);
//document.body.appendChild(renderer.domElement);

//Creating a box
/*
const boxGeometry = new THREE.BoxGeometry(1,1,1);
const boxMaterial=new THREE.MeshBasicMaterial({color: 0x00ff00})
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(boxMesh);*/

//Creating a sphere

const sphereGeometry = new THREE.SphereGeometry(1,24, 10);
const sphereMaterial=new THREE.MeshBasicMaterial({ wireframe: true });
var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
/*
const sphereGeometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
const material = new THREE.PointsMaterial({
  size: 0.005
})
const sphereMesh = new THREE.Points(sphereGeometry,material);*/

sphereMesh.position.set(1.45, -.16, 0)
scene.add(sphereMesh);

//vertice position
const {array} = sphereMesh.geometry.attributes.position
const randomValues = [];
for (let i=0; i<array.length; i++){
    const x=array[i];
    const y=array[i+1];
    const z=array[i+2];

    array[i]=x+Math.random()/10;
    array[i+1]=y+Math.random()/10;
    array[i+2]=z+Math.random()/10;

    //Randomizes the vertices' position
    for (let j=0; j<3; j++){
      randomValues.push(Math.random());
    }
}

sphereMesh.geometry.attributes.position.randomValues = randomValues;
sphereMesh.geometry.attributes.position.originalPosition = sphereMesh.geometry.attributes.position.array;

//color attribute addition
/*
const colors = [];
for (let i=0; i<sphereMesh.geometry.attributes.position.count; i++){
  colors.push(0,.19,.4);
}

sphereMesh.geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3))*/

//Creating a light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, .5, 3);
scene.add(light);

let frame=0;
const clock = new THREE.Clock();

addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / innerWidth *2 -1;
  mouse.y = -1 * event.clientY/innerHeight * 2 + 1;
})

//sizes
const sizes = {
  width: innerWidth,
  height: innerHeight
}


addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = innerWidth
    sizes.height = innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
})

//Listens to mouse scroll
let currPos=0;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if ((event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0)) {
        if (currPos>0){
            currPos--;
            if (currPos==9){
              moveTo(-1.5);
            }
        }
    }
    else {
        currPos++;
        if (currPos==9){
          moveTo(1.5);
        }
    }

    console.log(currPos);
});

function moveTo(dx){
  const coords = {x: sphereMesh.position.x, y: sphereMesh.position.y}
  new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
    .to({x: coords.x+dx, y: coords.y}, 3300) // Move to (300, 200) in 1 second.
    .easing(TWEEN.Easing.Cubic.InOut) // Use an easing function to make the animation smooth.
    .onUpdate(() => {
      sphereMesh.position.set(coords.x, coords.y, 0)
    })
    .start() 
}



function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  frame+=.01;
  /*
  sphereMesh.rotation.y+=.0001;
  sphereMesh.rotation.z+=.0001;*/

  //const elapsedTime = clock.getElapsedTime();
  //Moves sphere based on mouse position
  sphereMesh.rotation.x = mouse.y * (.05);
  sphereMesh.rotation.y = -1 * mouse.x * (.05);
  
  //Animating the box
  /*
  boxMesh.rotation.z+=.01;
  boxMesh.rotation.y+=.01;*/

  //sphereMesh.rotation.z+=.005;
  //sphereMesh.rotation.y+=.005;

  //Animating the sphere
  const {array, originalPosition, randomValues} = sphereMesh.geometry.attributes.position;

  for (let i=0; i<array.length; i+=3){
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i])*.0005;
  }

  sphereMesh.geometry.attributes.position.needsUpdate = true;
  TWEEN.update();
}

animate();