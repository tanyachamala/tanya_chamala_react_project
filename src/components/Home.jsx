import UserImg from "../assets/profile.JPG";

import Fade from "react-reveal/Fade";

function Home() {
  return (
    <Fade left>
      <div className="">
        <div className="grid grid-cols-2 min-h-screen">
          <div className="flex items-center  relative">
            <div className="h-shape"></div>
            <div className="h-[90%] w-[68%] bg-black ml-16 overflow-hidden rounded-lg">
              <img src={UserImg} alt="user Img" className="w-4/5 " />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  text-left mr-40">
            <h1 className="text-6xl my-2 font-bold">
              Hi, I'm <br /> Tanya Chamala. <br /> A Web Developer.
            </h1>

            <p className=" text-lg my-4 mr-54">
              I'm a Web Developer, I love to create beautiful and functional
              websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia, libero? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque blanditiis sed aut!
            </p>

            <button className="px-6 py-2 border border-secondary  rounded rounded-l-full hover:bg-secondary ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Home;
