import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className=" animate__animated animate__fadeIn grid place-items-center  min-h-screen bg-[url('/assets/home/background-home-mobile.jpg')] bg-bottom bg-no-repeat bg-cover sm:bg-center sm:bg-[url('/assets/home/background-home-tablet.jpg')] md:bg-[url('/assets/home/background-home-desktop.jpg')] transition-all duration-500 ">
        <section className="text-center grid gap-20 mt-20 sm:gap-28 md:flex md:items-end md:justify-center lg:gap-80  transition-all animate__animated animate__fadeIn  z-30">
          <section className="max-w-[450px]  grid gap-5 md:text-left md:gap-8 ">
            <span className="text-lg text-secondary font-barlowCondensed  uppercase font-light tracking-widest md:px-3 sm:text-2xl">
              so, you want to travel to
            </span>
            <h1 className="text-7xl uppercase text-white font-bellefair sm:text-9xl transition-all md:px-1">
              <Typewriter
                className=""
                onInit={(typewriter) => {
                  typewriter.typeString("Space").pauseFor(1000).start();
                }}
              />
            </h1>
            <p className="text-base text-secondary font-barlow px-7 font-light leading-relaxed sm:w-[480px] md:px-3 md:text-lg ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <Link
            to={"/destination"}
            className="h-32 w-32 sm:h-40 sm:w-40  sm:text-xl  border shadow-lg hover:bg-slate-200  hover:border-slate-200 transition-all flex justify-center items-center bg-white hover:scale-110 hover:-translate-y-2 text-lg mx-auto uppercase font-bellefair  rounded-[50%] text-[#0B0D17]  md:w-[200px] md:h-[200px] lg:h-[240px] lg:w-[240px] md:text-2xl  "
          >
            Explore
          </Link>
        </section>
      </main>
    </>
  );
};
export default Home;
