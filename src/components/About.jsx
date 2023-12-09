// import { useState } from "react";
import LightSpeed from "react-reveal/LightSpeed";

function About() {
  return (
    <LightSpeed left>
      <section className="max-w-screen-lg mx-auto py-40" id="about">
        <h2 className="text-center font-bold text-3xl mb-10">
          About memy stats
        </h2>

        <div className="gap-6">
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-2">
              <p className="text-left text-lg mb-10">
                The company itself is a very successful company. It will turn
                out that nothing blinded by hard work will succeed. You owe
                error and pain But they, or no one, is bound by the manner
                called his pleasure.
              </p>
              <p>
                The music let the chosen one avoid the exercise of pain Indeed,
                we accuse him of labor and pains when he was born. Whence The
                company itself is a very successful company. He was not relieved
                of these needs.
              </p>
            </div>
            <section className=" col-span-3 text-black dark:text-white">
              <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
                <div className="relative flex flex-col lg:flex-row">
                  <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mr-0">
                    <div className="px-6 py-10">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-secondary dark:text-white"></span>
                          <span className="relative">650+</span>
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          PROJECTS COMPLETED
                        </span>
                      </div>
                    </div>

                    <div className="px-6 py-10">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-secondary dark:text-white"></span>
                          <span className="relative">10+</span>
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          YEARS OF EXPERIENCE
                        </span>
                      </div>
                    </div>

                    <div className="px-6 py-10">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-secondary dark:text-white"></span>
                          <span className="relative">300+</span>
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          HAPPY CLIENTS
                        </span>
                      </div>
                    </div>

                    <div className="px-6 py-10">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-secondary dark:text-white"></span>
                          <span className="relative">400+</span>
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          CUSTOMER REVIEWS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </LightSpeed>
  );
}

export default About;
