import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import sky from './img/1.png';
import front from './img/barren_ft.jpg';
import back from './img/barren_bk.jpg';
import up from './img/barren_up.jpg';
import down from './img/barren_dn.jpg';
import right from './img/barren_rt.jpg';
import left from './img/barren_lf.jpg';

function App() {
  useEffect(() => {
    const Worldz = new SceneInit('myThreeJsCanvas');
    Worldz.initialize();
    Worldz.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.y = -10;
    boxMesh.position.x = 20;
    boxMesh.position.z = 20;
    // Worldz.scene.add(boxMesh);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 8.0);
    Worldz.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
    Worldz.scene.add( directionalLight );


    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    Worldz.scene.add( light );

    var geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    var cubeMaterials =
    [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(front), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(back), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(up), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(down), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(right), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(left), side: THREE.DoubleSide})
    ];

    
    // var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false});
    var cube = new THREE.Mesh( geometry, cubeMaterials);
    cube.position.x = 0;
    cube.position.y = 472;
    cube.position.z = 0;
    Worldz.scene.add( cube );




    let loadedModel;
    const glftLoader = new GLTFLoader();

    let mixer;

      //  glftLoader.load('./assets/characters/Daisy.glb', (gltfScene) => {
      // loadedModel = gltfScene;
     
      
      // gltfScene.scene.rotation.y = Math.PI / 8;
      // gltfScene.scene.position.y = -30;
      // gltfScene.scene.position.x = 0;
      // gltfScene.scene.position.z = 0;
      // gltfScene.scene.scale.set(20, 20, 20);
      // Worldz.scene.add(gltfScene.scene); 

      // addEventListener("keydown", function(){
      //   if (event.keyCode === 87) { 
      //     gltfScene.scene.position.z  += 4;}
      //   });

      // mixer = new THREE.AnimationMixer(gltfScene.scene);
      // const clips = gltfScene.animations;
      // clips.forEach(function(clip) {
      //   const action = mixer.clipAction(clip);
      //   action.play();
      // })
      
    // });





    const clock = new THREE.Clock();
    const animate = () => {
      if (loadedModel) {
        // loadedModel.scene.rotation.x += 0.01;
        // loadedModel.scene.rotation.y += 0.01;
        // loadedModel.scene.rotation.z += 0.01;
        mixer.update(clock.getDelta());
      }

      // addEventListener("keydown", function(){
      //   if (event.keyCode === 87) { 
      //     gltfScene.position.x  += 1;}
      //   });
      
      requestAnimationFrame(animate);
    };
    animate();


  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;