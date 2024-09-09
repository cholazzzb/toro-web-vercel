'use client';

import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

import { Button } from 'src/components/Button';
import { useGame } from 'src/domains/projects/ai-halma/3d/useGame';
import { css } from 'src/styled-system/css';

const gltfLoader = new GLTFLoader();

export default function AIHalma3D() {
  const { splineApp, ...gameLogic } = useGame();

  const onClick = () => {
    const piece = splineApp.current?.findObjectByName('Piece1-1');
    if (!piece) return;
    piece.position.x = -70;
    piece.position.z = -90;

    const squareAct = splineApp.current?.findObjectByName('Square-0-0-active');
    const square = splineApp.current?.findObjectByName('Square-0-0');
    if (!square || !squareAct) return;
    square.position.y = 2;
    squareAct.position.y = 3;
  };

  const onClickB = () => {
    const squareAct = splineApp.current?.findObjectByName('Square-0-0-active');
    const square = splineApp.current?.findObjectByName('Square-0-0');
    if (!square || !squareAct) return;
    square.position.y = 2;
    squareAct.position.y = 0;
  };

  const ref = useRef<HTMLDivElement>(null);
  const gltfRef = useRef<THREE.Group<THREE.Object3DEventMap>>();

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    // camera
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -50000,
      10000,
    );
    camera.position.set(0, 0, 0);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    // scene
    const scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/dkHxNwX6LpTj5dXM/scene.splinecode',
      (splineScene) => {
        console.log({ splineScene });
        scene.add(splineScene);
      },
      () => {},
      (error) => {
        console.error({ error });
      },
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.background = new THREE.Color('#2d2e32');
    renderer.setClearAlpha(1);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      controls.update();
      renderer.render(scene, camera);
    }

    // loader.load(
    //   'https://prod.spline.design/dkHxNwX6LpTj5dXM/scene.splinecode',
    //   (splineScene) => {
    //     console.log({ splineScene });
    //     scene.add(splineScene);
    //   },
    // );

    // loader.load(
    //   'http://localhost:3000/api/projects/ai-halma-3d',
    //   (splineScene) => {
    //     console.log({ splineScene });
    //     scene.add(splineScene);
    //   },
    // );
    // gltfLoader.load(
    //   'http://localhost:3000/api/projects/ai-halma-3d/model',
    //   (gltf) => {
    //     gltfRef.current = gltf.scene;
    //     scene.add(gltf.scene.children[0]);
    //   },
    // );
  }, [ref.current]);

  return (
    <main
      className={css({
        width: '100%',
        height: '100%',
      })}>
      {/* <Spline {...gameLogic} /> */}
      <div
        ref={ref}
        className={css({
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
        })}>
        <canvas id="canvas"></canvas>
      </div>
      <Button
        onClick={() => {
          if (gltfRef.current) {
            gltfRef.current.traverse((child) => {
              if (child) {
                console.log(child);
              }
            });
          }
        }}>
        A
      </Button>
    </main>
  );
}
