"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Box, Layers, RotateCw } from "lucide-react";

function SurfaceMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate 3D surface geometry for f(x, y) = sin(sqrt(x^2 + y^2)) / sqrt(x^2 + y^2) or paraboloid
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(6, 6, 40, 40);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const r = Math.sqrt(x * x + y * y);
      const z = Math.cos(r * 1.5) * 0.8 - (x * x + y * y) * 0.05;
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group rotation={[-Math.PI / 3, 0, 0]}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#34d59a"
          wireframe
          emissive="#285d49"
          emissiveIntensity={0.5}
        />
      </mesh>
      <gridHelper args={[10, 20, "#303236", "#151617"]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}

export function Surface3D() {
  return (
    <div className="bg-[#151617] border border-[#303236] rounded-[4px] p-6 text-[#ffffff] space-y-4">
      <div className="flex items-center justify-between border-b border-[#303236] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 text-[#34d59a]" />
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">
              Simulación 3D de Superficies de Optimización (Three.js)
            </h3>
          </div>
          <p className="text-xs text-[#797d86] mt-1">
            Malla tridimensional interactiva con rotación e iluminación neón
          </p>
        </div>

        <span className="font-mono text-xs text-[#34d59a] bg-[#0a0a0b] border border-[#303236] px-2.5 py-1 rounded-[4px] flex items-center gap-1.5">
          <RotateCw className="w-3 h-3 animate-spin" />
          R3F & THREE.JS
        </span>
      </div>

      <div className="h-[360px] w-full bg-[#000000] border border-[#303236] rounded-[4px] overflow-hidden relative">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#34d59a" intensity={1.5} />
          <SurfaceMesh />
          <OrbitControls enableZoom autoRotate autoRotateSpeed={1} />
        </Canvas>

        {/* Overlay info badge */}
        <div className="absolute bottom-3 left-3 bg-[#0a0a0b]/80 backdrop-blur border border-[#303236] px-3 py-1.5 rounded-[4px] font-mono text-[11px] text-[#797d86]">
          Función: <span className="text-[#34d59a]">f(x, y) = cos(r) - 0.05(x² + y²)</span> | Arrastra para rotar 360°
        </div>
      </div>
    </div>
  );
}
