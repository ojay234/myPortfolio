import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAbovedMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="about"
      className="pt-10 pb-24 max-w-[1560px] mx-auto w-[90%] md:h-[100vh] md:min-h-[100vh]"
    >
      {/* Header and image section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-10">
        <motion.div
          className="md:w-[45%] flex flex-col lg:gap-6 md:gap-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-center lg:text-[24px] md:text-[20px] text-[19px] font-bold lg:mt-10 mt-2">
            ABOUT ME
          </h1>
          <p className="text-justify text-[14px] md:text-[14px] lg:text-[16px]">
            My name is {""}
            <span className="font-bold text-[18px] lg:text-[22px] text-green">
              Ochuma David
            </span>
            , and I am a mid-level {""}
            <span className="font-bold text-[18px]  lg:text-[22px] text-green">
              Front-end developer {""}
            </span>
            with 2 years of experience in the industry. I specialize in building
            high-quality web applications and user interfaces that are both
            functional and visually appealing. I am skilled in a variety of
            programming languages, including HTML, CSS, JavaScript, and jQuery.
            I am also experienced in using front-end frameworks such as React
            and Angular to develop complex web applications. Additionally, I am
            familiar with front-end development tools and libraries such as
            Bootstrap, Sass, and Gulp.
          </p>
          <div className="flex gap-5 items-center text-[14px] md:text-[14px] lg:text-[16px]">
            <button className="w-[35%] h-[50px] p-2  bg-green hover:bg-transparent border-2 border-green transition-all duration-500">
              <a href="/">Contact Me</a>
            </button>
            <button className="w-[35%] h-[50px] p-2 bg-transparent border-2 border-gray_bg hover:bg-gray_bg transition-all duration-500">
              <a href="assets/resume.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        {/* Skiils */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Expereince */}
          <motion.div
            className="md:w-1/3 glass_container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="ellipse">
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-200
                 h-full w-full"
                src="assets/hero.png"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative w-fit">
        <p className="absolute lg:bottom-[-50px]  bottom-[-40px]   md:bottom-[-110px]  font-bold text-[40px] md:text-[60px] lg:text-[80px] border-b-4 border-white">
          02
        </p>
      </div>
    </section>
  );
};

export default About;
