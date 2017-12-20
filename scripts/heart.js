var scene;
var camera;
var controls;
var renderer;
var heart;
var rotationalObjMatrix;
var yAxis = new THREE.Vector3(0, 1, 0);
var heartCode =
  "../assets/heart.obj";

function initialize() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);
  document.getElementById("content").appendChild(renderer.domElement);

  var pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(-100, 200, 100);
  scene.add(pointLight);

  var pointLight2 = new THREE.PointLight(0xff0000);
  pointLight2.position.set(50, 50, 100);
  scene.add(pointLight2);

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    200000
  );
  camera.position.set(0, 0, 200);
  scene.add(camera);

  controls = new THREE.OrbitControls(camera);

  controls.enabled = false;

  //controls.update();


  var heartLoader = new THREE.OBJLoader();
  heartLoader.load(heartCode, function(obj) {
    obj.traverse(function(child) {
      if (child instanceof THREE.Mesh) {
        child.material.color.setHex(0x561f37);
      }
    });
    heart = obj;
    scene.add(obj);
  });
}

function rotate(obj, axis, radians) {
  rotationalObjMatrix = new THREE.Matrix4();
  rotationalObjMatrix.makeRotationAxis(axis.normalize(), radians);
  obj.matrix.multiply(rotationalObjMatrix);
  obj.rotation.setFromRotationMatrix(obj.matrix);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  rotate(heart, yAxis, Math.PI / 180);
}

initialize();
animate();
