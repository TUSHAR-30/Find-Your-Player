
import React,{useContext, useEffect} from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TopSection } from "./TopSection";
import AllPlayersContext from "../../context/AllPlayersContext";
const  Earth= React.lazy(() => import("./Earth"))


const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index:1;
    background-color:black;
  `;


function Home() {
  const ctx=useContext(AllPlayersContext);

  useEffect(()=>{
    ctx.updateFilters({
      nationalityAppliedFilters: [],
      ageAppliedFilters: [],
      battingaverageAppliedFilters: [],
      runsAppliedFilters:[],
      wicketsAppliedFilters:[],
      matchesAppliedFilters:[],
    })
  },[])


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



