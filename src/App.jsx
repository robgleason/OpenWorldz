import { useEffect } from 'react';

import * as THREE from 'three';

import SceneInit from './lib/SceneInit';

import sky from './img/1.png';

function App() {
  useEffect(() => {
    const Worldz = new SceneInit('myThreeJsCanvas');
    Worldz.initialize();
    Worldz.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    Worldz.scene.add(boxMesh);

    var geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    var cubeMaterials =
    [
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load(sky), side: THREE.DoubleSide}),
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(sky), side: THREE.DoubleSide}),
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(sky), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(sky), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(sky), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(sky), side: THREE.DoubleSide})
    ];

    
    // var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false});
    var cube = new THREE.Mesh( geometry, cubeMaterials);
    Worldz.scene.add( cube );




  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;