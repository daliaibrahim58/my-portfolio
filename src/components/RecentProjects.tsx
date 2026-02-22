import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* project cards */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-27 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={project.title} href={project.link}>
              {/* images */}
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
                <div className="flex justify-center items-center  relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div>
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="z-10 absolute bottom-0"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              {/* ===images== */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, idx) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width={40}
                        height={10}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-centre items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#3CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      {/* ===project cards=== */}
    </div>
  );
}

export default RecentProjects;


