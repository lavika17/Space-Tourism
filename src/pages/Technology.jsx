import { useState } from "react";
import TechnologyLayout from "../components/TechnologyLayout";
import NavBar from "../components/NavBar";

const Technology = () => {
  const [pageShow, setPageShow] = useState(1);

  return (
    <>
      <NavBar />
      <main
        className="animate__animated animate__fadeIn min-h-screen bg-[url('/background-technology-mobile.jpg')]   bg-cover
  sm:bg-[url('/background-technology-tablet.jpg')] lg:bg-[url('/background-technology-desktop.jpg')] transition-all duration-300 grid place-items-center "
      >
        <section className="grid gap-3 sm:w-full transition-all mt-10 lg:grid-cols-[auto,1fr] lg:grid-rows-[auto,1fr] ">
          <div className="flex gap-4  text-[#CCCC] uppercase tracking-widest text-lg   sm:text-lg pl-3  transition-all lg:row-start-1 lg:col-start-1 lg:text-3xl lg:mb-20 place-self-center sm:place-self-start sm:px-8 sm:mb-3 lg:px-36">
            <span className="font-barlowCondensed font-bold ">03</span>
            <h3 className="font-barlowCondensed text-white">
              Space Launch 101
            </h3>
          </div>
          {pageShow === 1 && (
            <TechnologyLayout
              techName={"Launch vehicle"}
              techDescription={
                "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
              }
              imgPortrait={
                "/assets/technology/image-launch-vehicle-portrait.jpg"
              }
              imgLandscape={
                "/assets/technology/image-launch-vehicle-landscape.jpg"
              }
              setPageShow={setPageShow}
              pageShow={pageShow}
            />
          )}
          {pageShow === 2 && (
            <TechnologyLayout
              techName={"Spaceport"}
              techDescription={
                "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
              }
              imgPortrait={"/assets/technology/image-spaceport-portrait.jpg"}
              imgLandscape={"/assets/technology/image-spaceport-landscape.jpg"}
              setPageShow={setPageShow}
              pageShow={pageShow}
            />
          )}
          {pageShow === 3 && (
            <TechnologyLayout
              techName={"Space capsule"}
              techDescription={
                "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
              }
              imgPortrait={
                "/assets/technology/image-space-capsule-portrait.jpg"
              }
              imgLandscape={
                "/assets/technology/image-space-capsule-landscape.jpg"
              }
              setPageShow={setPageShow}
              pageShow={pageShow}
            />
          )}
        </section>
      </main>
    </>
  );
};
export default Technology;
