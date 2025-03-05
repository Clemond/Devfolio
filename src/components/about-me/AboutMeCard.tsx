import { motion } from "framer-motion";

export default function AboutMeCard() {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className=" flex flex-col justify-center items-center mb-5  ">
        <div className="p-5 w-[50%] bg-gray-600/50 rounded-3xl  ">
          <p className="font-bold text-xl text-center">About Me</p>
          <p className="italic text-center">
            I am an application development student at STI with a passion for
            technology and problem-solving. I have experience in both front-end
            and back-end development, including skills in HTML, CSS, JavaScript,
            React, Kotlin, and Swift. Currently, I'm interning as an app
            developer at Pixlo in Stockholm, where I apply my knowledge in
            real-world projects. I am always eager to learn, grow, and
            contribute to innovative solutions while pursuing my passion for
            design and technology. I am an application development student at
            STI with a passion for technology and problem-solving. I have
            experience in both front-end and back-end development, including
            skills in HTML, CSS, JavaScript, React, Kotlin, and Swift.
            Currently, I'm interning as an app developer at Pixlo in Stockholm,
            where I apply my knowledge in real-world projects. I am always eager
            to learn, grow, and contribute to innovative solutions while
            pursuing my passion for design and technology.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
