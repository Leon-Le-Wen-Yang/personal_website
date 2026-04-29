import {useRef} from "react";
import Card from "../components/Card.jsx";
import { Globe } from "../components/globe";

const About = () => {
    const grid2Container = useRef();
    return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-default-color grid-1 flex items-end relative">
          <img
            src={`${import.meta.env.BASE_URL}assets/coding-pov.png`}
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className = "z-10"> 
            <p className="headtext">Hi, I'm Leon!</p>
            <p className = "subtext"> 
                I’m a Math and Business student building at the intersection of business, technology, and 
                human impact. When I’m not stuck in the library, you’ll probably find me working on a fun side 
                project or walking my dog, Mochi!
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-2/3 sm:h-1/2 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    IDEAS INTO IMPACT
                </p>
            <Card
              style={{ rotate: "35deg", top: "20%", left: "25%" }}
              text="Strategy"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "63%", left: "45%" }}
              text="Data Analysis"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "75deg", bottom: "50%", left: "87%" }}
              text="Growth"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "58%", left: "0%" }}
              text="Product"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "48%" }}
              text="Human Impact"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image={`${import.meta.env.BASE_URL}assets/logos/python.png`}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image={`${import.meta.env.BASE_URL}assets/logos/c.png`}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image={`${import.meta.env.BASE_URL}assets/logos/react.svg`}
              containerRef={grid2Container}
            />
            </div>
        </div>

        {/* Grid 3 */}
        {/*
      <div className="grid-black-color grid-3 relative">
        <div className="relative z-10 w-[48%] p-6">
          <p className="headtext">Time Zone</p>
          <p className="subtext">
            I’m based in Markham, Ontario, and open to remote work
            or relocating anywhere in Canada.
          </p>
        </div>

        <div className="absolute right-4 top-4 w-[14rem] h-[14rem] md:w-[18rem] md:h-[18rem] overflow-hidden">
          <Globe className="w-full h-full" />
        </div>
      </div>
      */}

      {/* Grid 3 */}
      <div className="grid-black-color grid-3 relative">
        <div className="relative z-10 w-[48%] p-6">
          <p className="headtext">Time Zone</p>
          <p className="subtext">
            I’m based in Markham, Ontario, and open to remote work
            or relocating anywhere in Canada.
          </p>
        </div>

        <div className="absolute right-4 top-4 w-[14rem] h-[14rem] md:w-[18rem] md:h-[18rem]">
          <Globe className="w-full h-full" />
        </div>
      </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4"></div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;