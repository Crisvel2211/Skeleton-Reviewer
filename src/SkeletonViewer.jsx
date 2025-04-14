import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SkeletonViewer = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const sceneRef = useRef(null);
  const [parts, setParts] = useState({});
  const [selectedPartName, setSelectedPartName] = useState(null);
  const [loading, setLoading] = useState(true);
  const particleRef = useRef(null);
  const mixerRef = useRef(null);

  const partDescriptions = {
    head: "The head houses the brain and forms the control center of the body.",
    shoulder: "The shoulder connects the arm to the torso and allows arm movement.",
    arm: "The arm allows for reaching and manipulating objects.",
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    scene.add(light);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 20, 10);
    scene.add(dirLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = true;
    controls.panSpeed = 0.5;
    controls.target.set(0, 1, 0);
    controls.update();

    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x999999,
      size: 0.15,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particleRef.current = particles;

    const loader = new GLTFLoader();
    loader.load(
      "/models/human_skeleton.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.1, 0.1, 0.1);

        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center);
        model.position.y += 1;

        scene.add(model);

        const mixer = new THREE.AnimationMixer(model);
        if (gltf.animations.length > 0) {
          gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
        }
        mixerRef.current = mixer;

        const loadedParts = {};
        model.traverse((object) => {
          if (object.isMesh) {
            object.material.emissive = new THREE.Color(0x000000);
            object.material.emissiveIntensity = 0.0;

            const name = object.name.toLowerCase();
            if (name.includes("head")) loadedParts.head = object;
            else if (name.includes("shoulder")) loadedParts.shoulder = object;
            else if (name.includes("arm")) loadedParts.arm = object;
          }
        });

        setParts(loadedParts);
        setTimeout(() => setLoading(false), 5000);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
        setLoading(false);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (mixerRef.current) mixerRef.current.update(clock.getDelta());
      if (particleRef.current) {
        particleRef.current.rotation.y += 0.001;
        particleRef.current.rotation.x += 0.0005;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const setSelectedPart = (partName) => {
    if (selectedPartName && parts[selectedPartName]) {
      parts[selectedPartName].material.emissive.setHex(0x000000);
    }

    setSelectedPartName(partName);

    if (partName && parts[partName]) {
      parts[partName].material.emissive.setHex(0x00ffff);
      parts[partName].material.emissiveIntensity = 0.6;
    }
  };

  const renderArrow = (partName, label, top, left) => {
    const isSelected = selectedPartName === partName;
    const textColor = isSelected ? "text-blue-500" : "text-red-500";

    return (
      <div
        onClick={() => setSelectedPart(partName)}
        className={`absolute flex flex-col items-center ${textColor} font-bold text-lg z-10 cursor-pointer`}
        style={{ top, left, transform: "translate(-50%, -50%)" }}
      >
        <div className="rotate-[-90deg] text-2xl">➤</div>
        <div>{label}</div>
      </div>
    );
  };

  const renderModal = (partName) => {
    let modalPosition = {};
    if (partName === "shoulder") {
      modalPosition = { top: "10%", right: "5%" };
    } else if (partName === "arm") {
      modalPosition = { top: "30%", left: "30%", transform: "translateX(-50%)" };
    } else {
      modalPosition = { top: "2%", left: "5%" };
    }

    return (
      <div
        className="absolute bg-white shadow-lg rounded-xl p-4 max-w-xs z-10"
        style={modalPosition}
      >
        <h4 className="font-semibold text-lg mb-2 capitalize">{partName}</h4>
        <p className="text-sm text-gray-700">{partDescriptions[partName]}</p>
      </div>
    );
  };

  return (
    <div
      className="relative w-full h-full"
      style={{
        cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=38216'), auto",
      }}
    >
      <div ref={containerRef} className="w-full h-full" />

      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
          <p className="text-lg text-gray-700 font-semibold">Loading Skeleton Model...</p>
        </div>
      )}

      {renderArrow("head", "Head", "22%", "50%")} 
      {renderArrow("shoulder", "Shoulder", "38%", "48%")} 
      {renderArrow("arm", "Arm", "55%", "60%")}

      {selectedPartName === "head" && renderModal("head")}
      {selectedPartName === "shoulder" && renderModal("shoulder")}
      {selectedPartName === "arm" && renderModal("arm")}
    </div>
  );
};

export default SkeletonViewer;
