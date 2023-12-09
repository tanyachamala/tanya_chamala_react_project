import LightSpeed from "react-reveal/LightSpeed";

const Education = () => {
  return (
    <LightSpeed left>
      <section className="max-w-screen-xl mx-auto pt-20">
        <section className=" sm:py-12  flex items-center flex-col">
          <div className=" p-6 mx-auto space-y-8 w-full ">
            <div className="space-y-2 text-center">
              <h2 className="text-5xl font-bold mb-10">MY TIMELINE</h2>
            </div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
              <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="  mx-4 ">
                  <div className="relative  px-4 space-y-6 ">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-secondary">
                        <h3 className="text-xl font-semibold tracki">
                          Computer Science Bachelors - Malla Reddy Engineering
                          College
                        </h3>
                        <time className="text-xs tracki uppercase dark:text-gray-400">
                          2017 - 2021
                        </time>
                        <p className="mt-3">
                          I have completed My Bachelors successfully and this
                          helped me very good knowledge and helped me to become
                          what i am now.
                        </p>
                      </div>
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-secondary">
                        <h3 className="text-xl font-semibold tracki">
                          CLOUD4C
                        </h3>
                        <time className="text-xs tracki uppercase dark:text-gray-400">
                          2022-2023
                        </time>
                        <p className="mt-3">
                          Worked as a basis support engineer, as Basis Support -
                          Worked on ABAP, JAVA, Web dispatcher, and Cloud
                          Connector system. Gained some experience in BOBJ.Have
                          basic knowledge of SAP S/4 HANA.As an Associate
                          Engineer, proactively monitored all the triggered
                          alerts. Worked on Tickets which are raised by
                          Customers with the help of the Resolve Tool and tried
                          to give resolution within SLA as per the priority the
                          ticket was raised. Handling Outages whenever a system
                          goes down getting required teams on call to resolve
                          issues as soon as possible, and informing about system
                          downtime to customers by raising a ticket to the
                          customer. The system is under maintenance whenever
                          there is an activity or immediate request from the
                          customer to perform any kind of activity on a system.
                          Working on tickets as per the SOP provided.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </LightSpeed>
  );
};

export default Education;
