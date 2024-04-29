import { useState } from "react";
import DestinationLayout from "../components/DestinationLayout";
import NavBar from "../components/NavBar";

const Destination = () => {
  const [pageShow, setPageShow] = useState(1);

  return (
    <>
          <NavBar />
    <main
      className="animate__animated animate__fadeIn min-h-screen bg-[url('/assets/destination/background-destination-mobile.jpg')]   bg-cover
    sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] transition-all duration-300 grid place-items-center "
    >
      {pageShow === 1 && (
        <DestinationLayout
          pageShow={pageShow}
          setPageShow={setPageShow}
          imgPlanet="assets\destination\image-moon.webp"
          planetName={"Moon"}
          descriptionPlanet={
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
          }
          distance={"384,400 km"}
          travelTime={"3 days"}
        />
      )}
      {pageShow === 2 && (
        <DestinationLayout
          pageShow={pageShow}
          setPageShow={setPageShow}
          imgPlanet="assets\destination\image-mars.webp"
          planetName={"Mars"}
          descriptionPlanet={
            " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
          }
          distance={"225 mil. km"}
          travelTime={"9 months"}
        />
      )}
      {pageShow === 3 && (
        <DestinationLayout
          pageShow={pageShow}
          setPageShow={setPageShow}
          imgPlanet="assets\destination\image-europa.webp"
          planetName={"Europa"}
          descriptionPlanet={
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
          }
          distance={"628 mil. km"}
          travelTime={"3 years"}
        />
      )}
      {pageShow === 4 && (
        <DestinationLayout
          pageShow={pageShow}
          setPageShow={setPageShow}
          imgPlanet="assets\destination\image-titan.webp"
          planetName={"Titan"}
          descriptionPlanet={
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
          }
          distance={"1.6 bil. km"}
          travelTime={"7 years"}
        />
      )}
    </main>
    </>
  );
};
export default Destination;
