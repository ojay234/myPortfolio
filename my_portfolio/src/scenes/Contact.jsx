import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contact"
      className="max-w-[1560px] mx-auto w-[90%] md:min-h-[100vh] h-fit md:pt-32 pb-24 md:pb-0"
    >
      {/* Headings */}

      {/* form & image */}
      <div className="md:flex md:justify-between gap-16 mt-5 md:w-[80%] mx-auto w-full">
        <motion.div
          className="basis-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col gap-6 text-white mt-10 items-center md:items-start">
            <h1 className="pb-4 border-b-2 border-gray_bg text-[30px] lg:text-[38px] font-bold w-fit">
              Contact Me
            </h1>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-7 text-gray_bg">
                <HiOutlineMail size="2rem" />
                <p className="text-white text-lg">davidojima007@gmail.com</p>
              </div>
              <div className="flex items-center gap-7 text-gray_bg">
                <FiPhone size="2rem" />
                <p className="text-white text-lg">+234 816 389 9819</p>
              </div>
              <div className="flex items-center gap-7 text-gray_bg">
                <GoLocation size="2rem" />
                <p className="text-white text-lg">Nigeria, Abuja</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target=" _blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/61531fe7fa661cbba93a698f03fc5c8d"
            method="POST"
          >
            <input
              className="w-full bg-transparent border-2 border-gray_bg rounded-md font-semibold placeholder:opaque-black p-[10px]"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red-500 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-transparent border-2 border-gray_bg rounded-md font-semibold placeholder:opaque-black p-[10px] mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-500 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-transparent border-2 border-gray_bg rounded-md font-semibold placeholder:opaque-black p-3 mt-5"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red-500 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 200 char."}
              </p>
            )}
            <button
              type="submit"
              className="p-5 bg-transparent border-2 border-green hover:bg-green rounded-sm font-semibold text-white mt-5 
                            transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
      <div className="relative w-fit">
        <p className="absolute left-0 lg:bottom-[-110px]  bottom-[-70px]   md:bottom-[-110px]  font-bold text-[40px] md:text-[60px] lg:text-[80px] border-b-4 border-white">
          04
        </p>
      </div>
    </section>
  );
};

export default Contact;
