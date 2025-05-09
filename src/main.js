import * as THREE from "three";

//Creating the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//principal cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./juanma.jpg");
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Secondary cube 1
const secondGeometry = new THREE.BoxGeometry(1, 1, 1);
const secondTexture = textureLoader.load("./anime1.jpg");
const secondMaterial = new THREE.MeshBasicMaterial({ map: secondTexture });
const secondCube = new THREE.Mesh(secondGeometry, secondMaterial);

secondCube.position.x = 3;
scene.add(secondCube);

// Secondary cube 2
const thirdGeometry = new THREE.BoxGeometry(1, 1, 1);
const thirdTexture = textureLoader.load("./anime1.jpg");
const thirdMaterial = new THREE.MeshBasicMaterial({ map: thirdTexture });
const thirdCube = new THREE.Mesh(thirdGeometry, thirdMaterial);

thirdCube.position.x = -3;
scene.add(thirdCube);

// Secondary cube 3
const fourthGeometry = new THREE.BoxGeometry(1, 1, 1);
const fourthTexture = textureLoader.load("./anime1.jpg");
const fourthMaterial = new THREE.MeshBasicMaterial({ map: fourthTexture });
const fourthCube = new THREE.Mesh(fourthGeometry, fourthMaterial);

fourthCube.position.x = -2;
fourthCube.position.y = -2;
scene.add(fourthCube);

// Secondary cube 4
const fifthGeometry = new THREE.BoxGeometry(1, 1, 1);
const fifthTexture = textureLoader.load("./anime1.jpg");
const fifthMaterial = new THREE.MeshBasicMaterial({ map: fifthTexture });
const fifthCube = new THREE.Mesh(fifthGeometry, fifthMaterial);

fifthCube.position.x = 2;
fifthCube.position.y = -2;
scene.add(fifthCube);

// Secondary cube 4
const sixthGeometry = new THREE.BoxGeometry(1, 1, 1);
const sixthTexture = textureLoader.load("./anime1.jpg");
const sixthMaterial = new THREE.MeshBasicMaterial({ map: sixthTexture });
const sixthCube = new THREE.Mesh(sixthGeometry, sixthMaterial);

sixthCube.position.y = 2.5;
scene.add(sixthCube);

camera.position.z = 5;

//Rendering the scene
function animate() {
    //Animating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    secondCube.rotation.x += 0.01;
    secondCube.rotation.y += 0.01;

    thirdCube.rotation.x += 0.01;
    thirdCube.rotation.y += 0.01;

    fourthCube.rotation.x += 0.01;
    fourthCube.rotation.y += 0.01;

    fifthCube.rotation.x += 0.01;
    fifthCube.rotation.y += 0.01;

    sixthCube.rotation.x += 0.01;
    sixthCube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
