import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
      justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
    
    return (
        <section id="testimonials" className="pt-32 pb-16">
          {/* heading */}
            <motion.div
               className="md:w-1/3 text-center md:text-left"
               initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {opacity:1,  scale: 1}
                        }}
                >
                 <p className="font-playfair font-semibold text-4xl mb-5">
                     TESTIMONIALS
                 </p>
                    <LineGradient width="mx-auto w-2/4" />
                    <p className="mt-10">
                     This is just a sub filling for my skills sub heading untill i come up with something else.
                    </p>
            </motion.div>  
            
            {/* Testimonials */}
            <div className="md:flex md:justify-between gap-8">
              <motion.div
               className={`bg-green ${testimonialStyles} `}
               initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {opacity:1, scale: 1}
                        }}
                >
                    <p className="font-playfair text-6xl">"</p>
                    <p className="text-center text-xl"> Dummy testimonial text until i come up with something else</p>
                </motion.div>
                <motion.div
               className={`bg-green ${testimonialStyles} `}
               initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {opacity:1, scale: 1}
                        }}
                >
                    <p className="font-playfair text-6xl">"</p>
                    <p className="text-center text-xl">Dummy testimonial text until i come up with something else</p>
                </motion.div>
                <motion.div
               className={`bg-green ${testimonialStyles} `}
               initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {opacity:1, scale: 1}
                        }}
                >
                    <p className="font-playfair text-6xl">"</p>
                    <p className="text-center text-xl">Dummy testimonial text until i come up with something else</p>
                </motion.div>

            </div>

        </section>
    )
    
}

export default Testimonials