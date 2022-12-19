import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAbovedMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* Header and image section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
             <motion.div
               className="md:w-1/3"
               initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity:1, x:0}
                        }}
                >
                 <p className="font -playfair  font-semibold text-4xl mb-5">
                        MY <span className="text-red-500">SKILLS</span>
                 </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                     This is just a sub filling for my skills sub heading untill i come up with something else.
                    </p>
                </motion.div>  
                <div className="mt-16 md:mt-0">
                    {isAbovedMediumScreens ? (
                       <div
                        className="relative ml-20 before:absolute  before:-top-10 before:-left-10
                         before:w-full before:h-full
                         before:border-2 before:border-coral before:z-[-1]"> 
                        <img
                            alt="skills"
                            className="z-10"
                            src="assets/skills-image.png" />
                    </div>
                    ) : (
                            <img
                            alt="skills"
                            className="z-10"
                            src="assets/skills-image.png" />
                    )}

                </div>
            </div>
          {/* Skiils */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* Expereince */} 
             <motion.div
               className="md:w-1/3 mt-10"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: {opacity:1, y:0},
                        }}
                >
                <div className="relative h-32">
                  <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">01</p>
                    <p className="font-playfair font-semibold text-3x; mt-3">
                        Experience
                    </p>
                  </div>
                  <div className="w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]"/>
                </div>
                <p className="mt-5">
                    This is just a dummy text till i think of something to actually post here 
                </p>
                </motion.div>    
              <motion.div
               className="md:w-1/3 mt-10"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay:0.2, duration: 0.5 }}
               variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: {opacity:1, y:0},
                        }}
                >
                <div className="relative h-32">
                  <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">01</p>
                    <p className="font-playfair font-semibold text-3x; mt-3">
                        Innoviate
                    </p>
                  </div>
                  <div className="w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]"/>
                </div>
                <p className="mt-5">
                    This is just a dummy text till i think of something to actually post here 
                </p>
                </motion.div>  
                <motion.div
               className="md:w-1/3 mt-10"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay:0.4, duration: 0.5 }}
               variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: {opacity:1, y:0},
                        }}
                >
                <div className="relative h-32">
                  <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">01</p>
                    <p className="font-playfair font-semibold text-3x; mt-3">
                        creative
                    </p>
                  </div>
                  <div className="w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]"/>
                </div>
                <p className="mt-5">
                    This is just a dummy text till i think of something to actually post here 
                </p>
                </motion.div>  
            </div>
        </section>
    )

}

export default MySkills