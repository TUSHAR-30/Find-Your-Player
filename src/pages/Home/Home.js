
import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../../component/Home/earth";
import { TopSection } from "../../component/Home/topSection";

const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index:1;
    background-color:black;
  `;


function Home() {
  return (
    <CanvasContainer>
      <TopSection />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
    </CanvasContainer>
  );
}

export default Home;



