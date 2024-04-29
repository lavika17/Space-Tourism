import Typewriter from "typewriter-effect";

const CrewLayout = ({
  role,
  name,
  description,
  imgCrew,
  setPageShow,
  pageShow,
}) => {
  return (
    <>
      <section className="h-[242px]  border-b  sm:border-none border-opacity-20 border-white w-full flex justify-center sm:row-start-3 sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 transition-all  lg:row-start-2 lg:col-start-2 ">
        <img
          className="animate__animated animate__fadeIn w-[177.123px] sm:w-[220px] lg:w-[400px]  transition-all lg:absolute lg:bottom-0 lg:right-36 md:hover:grayscale duration-500 lg:hover:-translate-y-4 lg:hover:scale-105"
          src={imgCrew}
          alt="crew space tourism"
        />
      </section>

      <section className="grid gap-6 lg:row-start-2 lg:place-items-start lg:mt-10">
        <div className="flex gap-4 justify-center sm:row-start-2 transition-all">
          <button
            onClick={() => setPageShow(1)}
            className={`h-3 w-3  rounded-full hover:bg-white transition-all md:z-50 ${
              pageShow === 1 ? "bg-white cursor-default" : "bg-gray-500"
            }`}
          ></button>
          <button
            onClick={() => setPageShow(2)}
            className={`h-3 w-3 rounded-full hover:bg-white transition-all md:z-50 ${
              pageShow === 2 ? "bg-white cursor-default" : "bg-gray-500"
            }`}
          ></button>
          <button
            onClick={() => setPageShow(3)}
            className={`h-3 w-3 rounded-full hover:bg-white transition-all md:z-50 ${
              pageShow === 3 ? "bg-white cursor-default" : "bg-gray-500"
            }`}
          ></button>
          <button
            onClick={() => setPageShow(4)}
            className={`h-3 w-3 rounded-full hover:bg-white transition-all md:z-50 ${
              pageShow === 4 ? "bg-white cursor-default" : "bg-gray-500"
            }`}
          ></button>
        </div>

        <div className="grid place-items-center text-center font-bellefair transition-all  lg:place-items-start lg:w-[60%] ">
          <h3 className="text-lg sm:text-xl text-[#CCCC] uppercase transition-all lg:text-3xl lg:mb-2  animate__animated animate__fadeIn">
            {role}
          </h3>
          <h2
            className={`text-2xl uppercase text-white sm:text-4xl transition-all lg:text-6xl h-[65px] md:z-50 ${
              name.length > 15 && "lg:text-5xl"
            }`}
          >
            <Typewriter
              className=""
              onInit={(typewriter) => {
                typewriter.typeString(name).pauseFor(1000).start();
              }}
            />
          </h2>
          <p className="font-barlow text-[15px]  text-secondary  leading-6  sm:px-28 transition-all lg:text-left lg:pl-0  lg:text-[18px] h-[96px] ">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};
export default CrewLayout;
