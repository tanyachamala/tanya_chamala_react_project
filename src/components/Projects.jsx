import LightSpeed from "react-reveal/LightSpeed";
import Project1 from "../assets/project.png";
import Project2 from "../assets/project2.png";
const Projects = () => {
  return (
    <LightSpeed left>
      <section className="mx-auto mb-[4.5rem] pt-20">
        <section className=" dark:text-gray-100 flex items-center flex-col">
          <div className=" p-6 mx-auto space-y-8 w-full ">
            <section className="py-10">
              <h1 className="mb-12 text-center font-sans text-5xl font-bold">
                Recent Blogs
              </h1>
              <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                  <a href="#" className="block h-full w-full">
                    <img
                      className="max-h-40 w-full object-cover"
                      alt="featured image"
                      src={Project1}
                    />
                    <div className="w-full bg-white p-4">
                      <p className="text-md font-medium text-indigo-500">
                        Coding
                      </p>
                      <p className="mb-2 text-xl font-medium text-gray-800">
                        Project Source
                      </p>
                      <p className="text-md font-light text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse vel neque ipsam?
                      </p>
                      <div className="justify-starts mt-4 flex flex-wrap items-center">
                        <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                          #tailwind
                        </div>
                        <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                          #css
                        </div>
                      </div>
                    </div>
                  </a>
                </article>

                <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                  <a href="#" className="block h-full w-full">
                    <img
                      className="max-h-40 w-full object-cover"
                      alt="featured image"
                      src={Project2}
                    />
                    <div className="w-full bg-white p-4">
                      <p className="text-md font-medium text-indigo-500">
                        Coding
                      </p>
                      <p className="mb-2 text-xl font-medium text-gray-800">
                        Project Source{" "}
                      </p>
                      <p className="text-md font-light text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse vel neque ipsam?
                      </p>
                      <div className="justify-starts mt-4 flex flex-wrap items-center">
                        <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                          #sap
                        </div>
                        <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                          #database
                        </div>
                      </div>
                    </div>
                  </a>
                </article>

                <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                  <a href="#" className="block h-full w-full">
                    <img
                      className="max-h-40 w-full object-cover"
                      alt="featured image"
                      src="https://images.unsplash.com/photo-1660227868332-93e0a0a8c67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    />
                    <div className="w-full bg-white p-4">
                      <p className="text-md font-medium text-indigo-500">
                        Coding
                      </p>
                      <p className="mb-2 text-xl font-medium line-clamp-1 text-gray-800">
                        Getting to know the Ice Factory Pattern
                      </p>
                      <p className="text-md font-light text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse vel neque ipsam?
                      </p>
                      <div className="justify-starts mt-4 flex flex-wrap items-center">
                        <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                          #js
                        </div>
                        <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                          #applicatin
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              </div>
            </section>
          </div>
        </section>
      </section>
    </LightSpeed>
  );
};

export default Projects;
