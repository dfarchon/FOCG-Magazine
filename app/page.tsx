"use client";
import BgCarousel from "@/components/BgCarousel";
import Overlay from "@/components/Overlay";
import { Suspense, createContext, useState } from "react";
import { useProgress } from "@react-three/drei";


import { PanelContext, SkyStrife } from "@/constants";

export default function Home() {
  const [world, setWorld] = useState(SkyStrife);
  const [hoverPlanet, setHoverPlanet] = useState(false);
  const [globalTime, setGlobalTime] = useState(0);

  return (
    <main className="h-screen w-screen overflow-hidden">
      <Suspense fallback={<Loader />}>
        <PanelContext.Provider
          value={{
            world,
            setWorld: (data) => {
              setWorld(data);
              // setActive();
            },
            hoverPlanet,
            setHoverPlanet: (status) => {
              setHoverPlanet(status);
            },
            globalTime,
            setGlobalTime: (time) => {
              setGlobalTime(time);
            }
          }}
        >
          <BgCarousel />
          <Overlay />
        </PanelContext.Provider>
      </Suspense>
      {/* <Loader /> */}

      {/* <div className="h-32 w-full flex">
        
      </div> */}
    </main>
  );
}

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  // console.log(active, progress, loaded, total);
  return (
    <div className="bg-[#212121]  flex w-full h-full">
      <div className="loader mx-auto my-auto">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
};
