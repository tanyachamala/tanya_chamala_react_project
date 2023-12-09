import LightSpeed from "react-reveal/LightSpeed";

const Skills = () => {
  const skills = [
    {
      name: "Languages",
      data: [
        { name: "C", score: 90 },
        { name: "C++", score: 80 },
        { name: "Java", score: 70 },
        { name: "HTML/CSS", score: 90 },
      ],
    },
    {
      name: "Tools",
      data: [
        { name: "VS Code", score: 90 },
        { name: "Git", score: 80 },
        { name: "Excel", score: 90 },
        { name: "Powerpoint", score: 90 },
      ],
    },
  ];
  return (
    <LightSpeed left>
      <section className="max-w-screen-lg mx-auto pt-24 mb-[4.5rem]">
        <section className="py-6 sm:py-12  dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-5xl font-bold">Skills</h2>
              <h2 className=" font-min mb-10">Check out my Skillss</h2>
            </div>
            <div className="max-w-screen-xl p-5 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skills.map((skill) => (
                  <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
                    <p className="text-lg font-medium">{skill.name}</p>
                    {skill.data.map((el) => (
                      <div className="mt-4">
                        <p className="float-left mb-2">{el.name}</p>
                        <span className="float-right mb-2">{el.score} %</span>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-300">
                          <div
                            style={{ width: el.score + "%" }}
                            className="h-full  overflow-hidden rounded-full bg-indigo-600"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </LightSpeed>
  );
};

export default Skills;
