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
const video1 = document.createElement("video");
video1.src = "./itsuki.mp4";
video1.loop = true;
video1.muted = true;
video1.play();
const video1Texture = new THREE.VideoTexture(video1);
const secondMaterial = new THREE.MeshBasicMaterial({ map: video1Texture });
const secondCube = new THREE.Mesh(secondGeometry, secondMaterial);

secondCube.position.x = 3;
scene.add(secondCube);

// Secondary cube 2
const thirdGeometry = new THREE.BoxGeometry(1, 1, 1);
const video2 = document.createElement("video");
video2.src = "./nino.mp4";
video2.loop = true;
video2.muted = true;
video2.play();
const video2Texture = new THREE.VideoTexture(video2);
const thirdMaterial = new THREE.MeshBasicMaterial({ map: video2Texture });
const thirdCube = new THREE.Mesh(thirdGeometry, thirdMaterial);

thirdCube.position.x = -3;
scene.add(thirdCube);

// Secondary cube 3
const fourthGeometry = new THREE.BoxGeometry(1, 1, 1);
const video3 = document.createElement("video");
video3.src = "./miku.mp4";
video3.loop = true;
video3.muted = true;
video3.play();
const video3Texture = new THREE.VideoTexture(video3);
const fourthMaterial = new THREE.MeshBasicMaterial({ map: video3Texture });
const fourthCube = new THREE.Mesh(fourthGeometry, fourthMaterial);

fourthCube.position.x = -2;
fourthCube.position.y = -2;
scene.add(fourthCube);

// Secondary cube 4
const fifthGeometry = new THREE.BoxGeometry(1, 1, 1);
const video4 = document.createElement("video");
video4.src = "./ichika.mp4";
video4.loop = true;
video4.muted = true;
video4.play();
const video4Texture = new THREE.VideoTexture(video4);
const fifthMaterial = new THREE.MeshBasicMaterial({ map: video4Texture });
const fifthCube = new THREE.Mesh(fifthGeometry, fifthMaterial);

fifthCube.position.x = 2;
fifthCube.position.y = -2;
scene.add(fifthCube);

// Secondary cube 4
const sixthGeometry = new THREE.BoxGeometry(1, 1, 1);
const video5 = document.createElement("video");
video5.src = "./yotsuba.mp4";
video5.loop = true;
video5.muted = true;
video5.play();
const video5Texture = new THREE.VideoTexture(video5);
const sixthMaterial = new THREE.MeshBasicMaterial({ map: video5Texture });
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
