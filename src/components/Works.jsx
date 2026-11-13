import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          {image ? (
            <img
              src={image}
              alt={`${name} screenshot`}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="w-full h-full rounded-2xl green-pink-gradient p-[1px]">
              <div className="w-full h-full rounded-2xl bg-black-200 flex justify-center items-center p-6">
                <p className="text-white font-black text-[26px] text-center leading-tight">
                  {name}
                </p>
              </div>
            </div>
          )}

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} source code on GitHub`}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt=""
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {live_link && (
          <a
            href={live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[14px] text-white underline underline-offset-4 hover:text-[#915EFF]"
          >
            Live demo
          </a>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects come from my jobs, client work, research and
          personal experiments. Each one is briefly described, with a link to
          its code repository and a live demo where one exists. Some
          repositories are private because the work belongs to an employer or
          client.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
