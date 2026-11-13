import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skillGroups, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className='mt-14 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28'
            key={technology.name}
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className='mt-16 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className='bg-tertiary rounded-2xl p-6'
          >
            <h3 className='text-white font-bold text-[18px]'>{group.title}</h3>
            <div className='mt-4 flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <span
                  key={item}
                  className='text-[13px] text-white-100 bg-black-200 rounded-full px-3 py-1'
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
