import * as THREE from "three";
import { color } from "three/webgpu";
    
    // ========== SCENE ====================
    const scene = new THREE.Scene()
    scene.background( { color: 0xFFFFFF } )
    
    // ========== CAMERA ===================
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


    // ========== RENDERER ================
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerHeight, window.innerWidth );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );
    renderer.render( scene, camera );


    // ========== ICOSAHERDRION ===============
    const  geometry = new THREE.IcosahedronGeometry( 12, 10 );

    const texture = new THREE.MeshBasicMaterial( { color: 0xFFF000 } );
    
    
    const box = new THREE.Mesh( geometry, texture );
    scene.add(box);

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 1);
    scene.add(hemiLight);


    // ========== ANiMATIONS ====================
    function animate() {
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        box.rotation.z += 0.01;
    }
