import { useState } from "react";
import CrewLayout from "../components/CrewLayout";
import NavBar from "../components/NavBar";

const Crew = () => {
  const [pageShow, setPageShow] = useState(1);

  return (
    <>
      <NavBar />
      <main
        className="animate__animated animate__fadeIn min-h-screen bg-[url('/assets/crew/background-crew-mobile.jpg')]   bg-cover
      sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] grid place-items-center sm:bg-bottom transition-all duration-300"
      >
        <section className="grid grid-rows-fit place-items-center gap-8 px-3 sm:mb-60 lg:grid-cols-1 lg:mb-0  lg:max-w-[1200px] ">
          <div className="flex gap-4  text-[#CCCC] uppercase tracking-widest text-lg sm:place-self-start sm:text-xl pl-3  transition-all lg:row-start-1 lg:col-start-1 lg:text-3xl lg:mb-20">
            <span className="font-barlowCondensed font-bold ">02</span>
            <h3 className="font-barlowCondensed text-white">Meet your crew</h3>
          </div>
          {pageShow === 1 && (
            <CrewLayout
              setPageShow={setPageShow}
              pageShow={pageShow}
              role={"Commander"}
              name={"Douglas Hurley"}
              description={
                "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
              }
              imgCrew={"assets/crew/image-douglas-hurley.png"}
            />
          )}
          {pageShow === 2 && (
            <CrewLayout
              setPageShow={setPageShow}
              pageShow={pageShow}
              role={"Mission Specialist"}
              name={"Mark Shuttleworth"}
              description={
                "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
              }
              imgCrew={"assets/crew/image-mark-shuttleworth.png"}
            />
          )}
          {pageShow === 3 && (
            <CrewLayout
              setPageShow={setPageShow}
              pageShow={pageShow}
              role={"Pilot"}
              name={"Victor Glover"}
              description={
                "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
              }
              imgCrew={"assets/crew/image-victor-glover.png"}
            />
          )}
          {pageShow === 4 && (
            <CrewLayout
              setPageShow={setPageShow}
              pageShow={pageShow}
              role={"Flight Engineer"}
              name={"Anousheh Ansari"}
              description={
                "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
              }
              imgCrew={"assets/crew/image-anousheh-ansari.png"}
            />
          )}
        </section>
      </main>
    </>
  );
};
export default Crew;
