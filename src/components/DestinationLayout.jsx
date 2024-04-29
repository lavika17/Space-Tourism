import Typewriter from "typewriter-effect";

const DestinationLayout = ({
  imgPlanet,
  planetName,
  descriptionPlanet,
  distance,
  travelTime,
  setPageShow,
  pageShow,
}) => {
  return (
    <section className="grid place-items-center start-0  gap-7 pt-16   lg:grid-cols-2  lg:gap-0  px-5 w-full ">
      <section className="flex flex-col gap-5 items-center w-full justify-between h-full lg:items-center lg:gap-10">
        <div className="flex gap-4  text-[#CCCC] uppercase tracking-widest sm:self-start px-7 transition-all lg:text-xl xl:text-3xl  lg:px-36">
          <span className="font-barlowCondensed font-bold ">01</span>
          <h3 className="font-barlowCondensed text-white">
            Pick your destination
          </h3>
        </div>
        <img
          className="animate__animated
          animate__fadeIn xl:ml-56 w-[200px] h-[200px] lg:w-[370px] lg:h-[370px] transition-all"
          src={imgPlanet}
          alt=""
        />
      </section>

      <section className=" grid place-items-center gap-2 lg:place-items-start lg:gap-7 lg:mt-5 transition-all">
        <div className="flex justify-center gap-4  font-barlowCondensed text-white tracking-widest text-lg lg:gap-8">
          <button
            onClick={() => setPageShow(1)}
            className={`uppercase text-secondary hover:text-white transition-all  ${
              pageShow === 1
                ? "text-white border-b-2 cursor-default"
                : "text-secondary hover:scale-110"
            }`}
          >
            Moon
          </button>
          <button
            onClick={() => setPageShow(2)}
            className={`uppercase text-secondary hover:text-white transition-all  ${
              pageShow === 2
                ? "text-white border-b-2 cursor-default"
                : "text-secondary hover:scale-110"
            }`}
          >
            Mars
          </button>
          <button
            onClick={() => setPageShow(3)}
            className={`uppercase text-secondary hover:text-white transition-all  ${
              pageShow === 3
                ? "text-white border-b-2 cursor-default"
                : "text-secondary hover:scale-110"
            }`}
          >
            Europa
          </button>
          <button
            onClick={() => setPageShow(4)}
            className={`uppercase text-secondary hover:text-white transition-all  ${
              pageShow === 4
                ? "text-white border-b-2 cursor-default"
                : "text-secondary hover:scale-110"
            }`}
          >
            Titan
          </button>
        </div>

        <div>
          <h2 className="text-5xl uppercase text-white font-bellefair sm:text-6xl transition-all  lg:text-8xl text-center lg:text-left ">
            <Typewriter
              className=""
              onInit={(typewriter) => {
                typewriter.typeString(planetName).pauseFor(1000).start();
              }}
            />
          </h2>
          <p className="text-sm text-secondary font-barlow font-light leading-relaxed sm:w-[480px] sm:px-3 text-center border-b border-b-secondary border-opacity-10 mx-5 pb-6 px-3  lg:text-lg lg:text-start transition-all lg:px-0 lg:mx-0 lg:h-[137px] line-clamp-5">
            {descriptionPlanet}
          </p>
          <div className="grid gap-2   sm:grid-cols-2 sm:gap-10">
            <div className="grid  place-items-center lg:place-items-start">
              <h4 className="font-barlowCondensed text-secondary tracking-widest text-lg uppercase ">
                Avg. distance
              </h4>
              <span className="font-bellefair text-white tracking-widest text-2xl uppercase ">
                <Typewriter
                  className=""
                  onInit={(typewriter) => {
                    typewriter.typeString(distance).pauseFor(1000).start();
                  }}
                />
              </span>
            </div>
            <div className="grid  place-items-center lg:place-items-start">
              <h4 className="font-barlowCondensed text-secondary tracking-widest text-lg uppercase">
                Est. travel time
              </h4>
              <span className="font-bellefair text-white tracking-widest text-2xl uppercase ">
                <Typewriter
                  className=""
                  onInit={(typewriter) => {
                    typewriter.typeString(travelTime).pauseFor(1000).start();
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default DestinationLayout;
