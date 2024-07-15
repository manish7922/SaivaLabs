import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import BuinessImg from "../../assets/images/business1.webp";
import GoogaleImg from "../../assets/images/reviews.webp";
import YearsImg from "../../assets/images/15years.webp";
import BuinessImg2 from "../../assets/images/business-3.webp";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <div className="bg-white dark:bg-black dark:text-white duration-300 mt-10">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-2 gap-10 place-items-center">
            <div className="flex flex-col justify-center m-0">
              <h1 className="text-4xl sm:text-4xl font-semibold leading-tight mb-3">
                Delivering{" "}
                <span className="text-red-600">Digital Solutions </span>
              </h1>
              <h3 className="text-3xl sm:text-4xl font-semibold leading-none mb-2">
                that grow and scale your{" "}
                <span className="text-red-600">business</span>
              </h3>
              <p className="text-lg leading-7 text-justify text-paragraph mb-5 mt-5">
                The right Branding, Professional Website, Internet & Social
                Media Presence, and Strategic digital marketing with powerful
                tools to transform your business to all new heights
              </p>
              <div className="flex gap-5">
                <button className="bg-red-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
                  Explore Services
                </button>
                <button className="bg-white hover:text-black hover:border-black text-red-600 font-bold py-1 px-3 rounded border border-red-600 hover:py-2 hover:px-2 transition-all duration-200">
                  Get Quote
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="df">
                <div className="sh1">
                  <div className="image rounded-md">
                    <img
                      src={BuinessImg}
                      alt="Business Man using Digital Solutions"
                      className="w-full rounded-2xl "
                    />
                  </div>
                  <div className="shadow-md rounded-2xl bg-white-500 border-spacing-2 border-black  py-2 px-4 flex items-center gap-4 mt-5">
                    <img
                      src={GoogaleImg}
                      alt="Google Reviews Logo"
                      className="h-10 mr-4"
                    />
                    <h3 className="text-4xl">4.7</h3>
                  </div>
                </div>
              </div>

              <div className="df">
                <div className="sh2">
                  <div className=" rounded-2xl bg-blue-500 py-2 px-4 flex items-center gap-4 mb-5">
                    <img
                      src={YearsImg}
                      alt="15 Years of Experience"
                      className="emb"
                    />
                    <div className="cont ml-4">
                      <h5 className="leading-tight">
                        Years of <br />
                        Experience
                      </h5>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src={BuinessImg2}
                      alt="Business Women using Digital Solutions"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="pt-16 bg-white dark:bg-black dark:text-white duration-300 mt-10 z-10">
        <div className="container min-h-[620px] flex flex-col md:flex-row mt-10 sm:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
            <div className="flex flex-col justify-center m-0 ">
              <div className="sm:text-4xl font-semibold mb-2">
                <h1 className="text-4xl ">
                  Delivering{" "}
                  <span className="text-red-600">Digital Solutions </span>
                </h1>
                <h3 className="text-3xl ">
                  that grow and scale your{" "}
                  <span className="text-red-600">business</span>
                </h3>
              </div>
              <p className="text-base leading-5 text-justify text-paragraph mb-5 mt-5">
                The right Branding, Professional Website, Internet & Social
                Media Presence, and Strategic digital marketing with powerful
                tools to transform your business to all new heights
              </p>
              <div className="flex gap-5 flex-wrap">
                <button className="bg-red-500 hover:bg-black text-white font-semibold py-2 px-6 rounded hover:scale-x-95 hover:scale-y-95">
                  Explore Services
                </button>
                <button className="bg-white hover:text-black hover:border-black text-red-600 py-2 px-6 rounded border border-red-600  transition-all duration-200 hover:scale-x-95 hover:scale-y-95 font-semibold">
                  Get Quote
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col items-center">
                <div className="image rounded-md">
                  <img
                    src={BuinessImg}
                    alt="Business Man using Digital Solutions"
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="shadow-md rounded-2xl bg-white-500 border-spacing-2 border-black py-2 px-4 flex items-center gap-4 mt-5">
                  <img
                    src={GoogaleImg}
                    alt="Google Reviews Logo"
                    className="h-10 mr-4"
                  />
                  <h3 className="text-4xl">4.7</h3>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-2xl bg-red-500 py-3 px-5 flex items-center gap-4 mb-5 text-white">
                  <img
                    src={YearsImg}
                    alt="15 Years of Experience"
                    className="h-20"
                  />
                  <div className="ml-4">
                    <h5 className="leading-tight text-2xl">
                      Years of <br />
                      Experience
                    </h5>
                  </div>
                </div>
                <div className="image rounded-md">
                  <img
                    src={BuinessImg2}
                    alt="Business Women using Digital Solutions"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
