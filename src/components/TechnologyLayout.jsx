import Typewriter from "typewriter-effect";

const TechnologyLayout = ({
  setPageShow,
  pageShow,
  techName,
  techDescription,
  imgPortrait,
  imgLandscape,
}) => {
  return (
    <>
      <section className="h-[137px] sm:h-[230px] lg:row-start-2 lg:col-start-2 animate__animated animate__fadeIn ">
        <img className="h-full w-full lg:hidden" src={imgLandscape} alt="" />
        <img
          className="hidden lg:block absolute h-[500px] right-0 bottom-8 max-w-[600px]"
          src={imgPortrait}
          alt=""
        />
      </section>
      <section className="flex flex-col mt-5 transition-all lg:flex-row lg:gap-2 lg:row-start-2 lg:col-start-1  lg:px-2 xl:px-32 xl:gap-10 ">
        <div className="flex justify-center gap-3 text-white text-sm lg:flex-col lg:gap-8">
          <button
            className={` ${
              pageShow === 1
                ? "bg-white text-black cursor-default"
                : "bg-transparent"
            } rounded-full border border-opacity-10 border-white h-10 w-10 hover:text-black hover:bg-white transition-all font-bellefair sm:h-12 sm:w-12 lg:h-12 lg:w-12 xl:h-14 xl:w-14 lg:text-lg`}
            onClick={() => setPageShow(1)}
          >
            1
          </button>
          <button
            className={` ${
              pageShow === 2
                ? "bg-white text-black cursor-default"
                : "bg-transparent"
            } rounded-full border border-opacity-10 border-white h-10 w-10 hover:text-black hover:bg-white transition-all font-bellefair sm:h-12 sm:w-12 lg:h-12 lg:w-12 xl:h-14 xl:w-14 lg:text-lg`}
            onClick={() => setPageShow(2)}
          >
            2
          </button>
          <button
            className={` ${
              pageShow === 3
                ? "bg-white text-black cursor-default"
                : "bg-transparent"
            } rounded-full border border-opacity-10 border-white h-10 w-10 hover:text-black hover:bg-white transition-all font-bellefair sm:h-12 sm:w-12 lg:h-12 lg:w-12 xl:h-14 xl:w-14 lg:text-lg`}
            onClick={() => setPageShow(3)}
          >
            3
          </button>
        </div>
        <div className="grid place-items-center mt-5 lg:place-items-start lg:mb-10">
          <h3 className="uppercase text-secondary font-barlowCondensed tracking-widest lg:text-2xl transition-all">
            The terminology...
          </h3>
          <h2 className="uppercase text-white text-2xl font-bellefair sm:text-4xl sm:mt-3 lg:text-6xl  ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(techName).pauseFor(1000).start();
              }}
            />
          </h2>
          <p className="text-center  text-secondary font-barlow leading-6 text-sm mt-5 transition-all px-4 max-w-[400px] sm:max-w-[495px] sm:mt-3 sm:px-5 lg:text-left lg:px-0 lg:text-base h-[120px]">
            {techDescription}
          </p>
        </div>
      </section>
    </>
  );
};
export default TechnologyLayout;
