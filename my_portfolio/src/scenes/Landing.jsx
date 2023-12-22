import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <section
      id="home"
      className="max-w-[1560px] mx-auto w-[90%] md:min-h-[100vh] min-h-[90vh] h-fit my-auto"
    >
      {/* main section */}
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-end gap-0 pt-24 ">
        {/* Headings */}
        <div className="md:-ml-10 z-20 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:ml-[-20px] lg:ml-[-25px] grid justify-items-center">
              <p className="text-5xl font-playfair z-10  font-semibold md:text-[54px] lg:text-[68px]">
                FRONT END
              </p>
              <p className="xs:relative z-20 text-3xl md:text-[36px] lg:text-[46px]  tracking-[11.5px] md:tracking-[12.5px] lg:tracking-[16.5px] my-3">
                DEVELOPER
              </p>
              <p className="xs:relative z-20 text-2xl  md:text-[30px] lg:text-[35px] tracking-wide my-3 text-[#6a6a6a] ">
                BUILDING YOUR IDEAS
              </p>
            </div>
          </motion.div>
        </div>
        <div className="relative md:absolute md:top-[90px]">
          <div className="absolute ml-0">
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <SocialMediaIcons />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-[8%]">
          {/* image section */}
          <div className="ellipse">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-200
                 h-full w-full"
              src="assets/hero.png"
            />
          </div>
        </div>
      </div>
      <div className="relative w-fit">
        <p className="absolute  lg:bottom-[-50px]  bottom-[-40px] md:bottom-[-80px] font-bold text-[40px] md:text-[60px] lg:text-[80px] border-b-4 border-white">
          01
        </p>
      </div>
    </section>
  );
};

export default Landing;
