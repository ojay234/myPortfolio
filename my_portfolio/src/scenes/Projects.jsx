import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Projects = () => {
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const projectVariant = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1}
    }

    const Project = ({ title }) => {
        const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
        bg-gray-100 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-gray-800`;

        const projectTitle = title.split(" ").join("-").toLowerCase();

        return (
            <motion.div variants={projectVariant} className="relative">
                <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <p className="mt-7">
                        This is just to replace the original text untill i findsomething better
                    </p>
                </div>
                <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
            </motion.div>
        )
    } 
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* Headings */}
         <motion.div
               className="md:w-2/4 mx-auto text-center"
               initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: {opacity:1, y:0}
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
                     This is just a sub filling for my skills sub heading untill i come up with something else.
                    </p>
            </motion.div>  
            {/* Projects */}
            <div className="flex justify-center">
               <motion.div
               className="sm:grid sm:grid-cols-3"
               initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                >
                {/* Row 1*/}
                <div
                        className="flex justify-start text-center items-center p-10 bg-red-500
                 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    
                    </div>
                    <Project title="Project 1" />
                    <Project title="Project 2" />
                    
                    {/* Row 2*/}
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    {/* Row 3*/}
                    <Project title="Project 6" />
                    <Project title="Project 7" />
                    <div
                        className="flex justify-start text-center items-center p-10 bg-red-500
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    
                    </div>
            </motion.div>
            </div>

        </section>
    )
}


export default Projects 