import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "React",
    date: "2023 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Backend",
    company: "NodeJs",
    date: "2024 - Present",
    responsibilities: [
      "Develop and maintain server-side logic.",
      "Monitor server performance, troubleshoot issues, and implement solutions to handle increasing traffic and evolving business needs.",
      "Collaborate with cross-functional teams.",
    ],
  },
  {
    job: "DSA",
    company: "C++",
    date: "2024 - Present",
    responsibilities: [
      "Design and implement data structures for optimal storage and retrieval of data",
      "Optimize algorithms for problem-solving, ensuring efficiency in time and space complexity.",
      "provide scalable solutions using DSA principles",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
