import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

import EarthDayMap from "../../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../../assets/textures/8k_earth_clouds.jpg";

 function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();
  const [sphereArgs, setSphereArgs] = useState([1, 32, 32]); // Initial value of sphere geometry args


  // Update sphere geometry args based on screen size
  useEffect(() => {
    function handleResize() {
      // Adjust the sphere geometry args based on screen size
      if (window.innerWidth <= 768) {
        setSphereArgs([0.5, 16, 16]); // For smaller screens
      } else {
        setSphereArgs([1, 32, 32]); // Default args for larger screens
      }
    }

    // Initial call to handleResize
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={10}
        fade={true}
      />

      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry
          args={sphereArgs}
        />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry
          args={sphereArgs}
        />
        <meshPhongMaterial
          specularMap={specularMap}
        />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
      
    </>
  );
}

export default Earth
