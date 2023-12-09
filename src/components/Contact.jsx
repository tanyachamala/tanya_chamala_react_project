import LightSpeed from "react-reveal/LightSpeed";
import Job1 from "../assets/port1.jpg";
import Job2 from "../assets/port2.jpg";
import Job3 from "../assets/port3.jpg";
import Job4 from "../assets/port4.jpg";
import UserImg from "../assets/profile.JPG";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const Contact = () => {
  const images = [UserImg, Job1, Job2, Job3, Job4];

  return (
    <LightSpeed left>
      <div className="grid grid-cols-2 ">
        <div className=" pt-20 max-w-screen-md gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
          <h2 className="text-center text-3xl mb-10">Contact Us</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded outline outline-1 dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded outline outline-1 dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded outline outline-1 dark:bg-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-secondary text-white"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className=" pt-40  Slider max-w-xl">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {images.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  loading="lazy"
                  src={img}
                  alt="my imng"
                  className="shadow-slate-500"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </LightSpeed>
  );
};

export default Contact;
