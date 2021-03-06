import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
//import {OrbitControls} from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
import $ from "jquery";
import * as TWEEN from "@tweenjs/tween.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mouse={
  x: undefined,
  y: undefined
}

// Canvas
const canvas = document.querySelector('canvas.webgl');
gsap.registerPlugin(ScrollTrigger);

//const raycaster = new THREE.Raycaster();
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75, innerWidth/innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

//Set camera position to see objects
camera.position.set(0,0, .7);

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

//Creating a sphere
const sphereGeometry = new THREE.SphereGeometry(1,24, 10);
const sphereMaterial=new THREE.MeshBasicMaterial({ wireframe: true });
var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

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


//Creating a light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, .5, 3);
scene.add(light);

let frame=0;

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

addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / innerWidth *2 -1;
  mouse.y = -1 *event.clientY/innerHeight * 2 + 1;
})


//1.45, -.16, 0
function moveTo(toX){
  const coords = {x: sphereMesh.position.x}
  new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
    .to({x: toX}, 3000) // Moves to a new location
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(() => {
      sphereMesh.position.set(coords.x, -.16, 0)
    }).start() 
}

//Enters left person
gsap.to("#person1",{
  scrollTrigger: {
    trigger: "#personup",
    start: "top bottom"
  },
  x: 500,
  duration:1
});

//Enters right person
gsap.to("#person2",{
  scrollTrigger: {
    trigger: "#personright",
    start: "top bottom"
  },
  x: -500,
  duration:1
});

//Enter/exits sphere
ScrollTrigger.create({
  trigger: $("#start"),
  onEnterBack: () => moveTo(1.45),
  onLeave: () => moveTo(2.67)
});


function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  frame+=.01;
  
  //Moves sphere based on mouse position
  sphereMesh.rotation.x = mouse.y * (.05);
  sphereMesh.rotation.y = -1 * mouse.x * (.05);

  //Animating the sphere
  const {array, originalPosition, randomValues} = sphereMesh.geometry.attributes.position;

  for (let i=0; i<array.length; i+=3){
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i])*.0005;
  }

  sphereMesh.geometry.attributes.position.needsUpdate = true;
  TWEEN.update();
}

animate();

