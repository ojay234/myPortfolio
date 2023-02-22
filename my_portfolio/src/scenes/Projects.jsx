import { motion } from "framer-motion";

const Projects = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const Project = ({ title, link, name, text }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-70 transition duration-500 
        bg-black z-30 flex flex-col justify-center items-center text-center p-16 text-deep-gray-800 rounded-lg`;

    const projectTitle = title.split(" ").join("_").toLowerCase();

    return (
      <motion.div variants={projectVariant} className="relative  rounded-lg">
        <a href={link}>
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{name}</p>
            <p className="mt-7">{text}</p>
          </div>
          <img
            src={`../assets/${projectTitle}`}
            alt={projectTitle}
            className="w-full h-full md:h-120%  object-cover rounded-lg"
          />
        </a>
      </motion.div>
    );
  };
  return (
    <section
      id="projects"
      className="max-w-[1560px] mx-auto w-[90%] md:min-h-[100vh] h-fit md:relative pb-16 md:pb-0"
    >
      {/* Headings */}
      {/*
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font -playfair  font-semibold text-4xl">
            <span className="text-red-500">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>


        <p className="mt-10 mb-10">
          This is just a sub filling for my skills sub heading untill i come up
          with something else.
        </p>
      </motion.div>
       */}
      {/* Projects */}
      <div className="md:absolute flex flex-col gap-3 md:mt-28">
        <motion.div
          className="flex justify-between gap-5 flex-col md:flex-row flex-wrap mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
        >
          {/* Row 1*/}
          <div className="md:w-[30%] w-[90%]">
            <Project
              title="Project 1.jpg"
              link="https://d-stage.vercel.app"
              name="D-stage"
              text="An NFT exchange market place"
            />
          </div>
          <div className="md:w-[30%] w-[90%]">
            <Project
              title="Project 2.jpg"
              link={"https://eshop-fe74d.web.app/"}
              name="Eshop"
              text="E-commerce Organic shop"
            />
          </div>
          <div className="md:w-[30%] w-[90%]">
            <Project
              title="Project 4.jpg"
              link={"https://jade-marketing.vercel.app/"}
              name="Jaydemarketing"
              text="A digital marketing and software development agency website"
            />
          </div>
          <div className="md:w-[30%] w-[90%]">
            <Project
              title="Project 5.jpg"
              link={"https://github.com/ojay234/blog"}
              name="Life & Light"
              text="Node js Blog api"
            />
          </div>
          <div className="md:w-[30%] w-[90%]">
            <Project
              title="Project 3.jpg"
              link={"https://ojaystore.netlify.app/"}
              name="Ojay Store"
              text="A static page of an e-commerce store"
            />
          </div>
        </motion.div>
        <div className="relative w-fit">
          <p className="absolute lg:bottom-[-120px]  bottom-[-80px]   md:bottom-[-120px]  font-bold text-[40px] md:text-[60px] lg:text-[80px] border-b-4 border-white">
            03
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
