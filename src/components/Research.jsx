import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { profile, publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ME = "Afridi Ibn Rahman";

const PublicationCard = ({ index, publication }) => {
  const { title, authors, etAl, venue, year, type, summary, tags, link, code } =
    publication;

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className='green-pink-gradient p-[1px] rounded-2xl'
    >
      <div className='bg-tertiary rounded-2xl p-6 sm:p-8 flex sm:flex-row flex-col gap-5'>
        <div className='flex sm:flex-col flex-row sm:items-center items-baseline gap-3 sm:w-[110px] shrink-0'>
          <p className='text-white font-black text-[32px] leading-none'>
            {year}
          </p>
          <p className='text-secondary text-[12px] uppercase tracking-wider sm:text-center'>
            {type}
          </p>
        </div>

        <div className='flex-1 min-w-0'>
          <h3 className='text-white font-bold text-[20px] leading-snug'>
            {title}
          </h3>

          <p className='mt-2 text-[14px] text-secondary'>
            {authors.map((author, i) => (
              <span key={author}>
                {author === ME ? (
                  <span className='text-white font-semibold'>{author}</span>
                ) : (
                  author
                )}
                {i < authors.length - 1 ? ", " : ""}
              </span>
            ))}
            {etAl ? " et al." : ""}
          </p>

          <p className='mt-1 text-[14px] italic text-[#915EFF]'>{venue}</p>

          <p className='mt-4 text-white-100 text-[15px] leading-[26px]'>
            {summary}
          </p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={`${title}-${tag}`}
                className='text-[12px] text-secondary border border-secondary/40 rounded-full px-3 py-1'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='mt-5 flex flex-wrap gap-3'>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#915EFF] hover:bg-[#7a45f0] transition-colors text-white text-[14px] font-semibold py-2 px-5 rounded-lg'
            >
              Read paper
            </a>
            {code && (
              <a
                href={code}
                target='_blank'
                rel='noopener noreferrer'
                className='border border-secondary/60 hover:border-white transition-colors text-white text-[14px] font-semibold py-2 px-5 rounded-lg'
              >
                View code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Research = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Publications</p>
        <h2 className={styles.sectionHeadText}>Research.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Alongside software engineering, I research applied machine learning,
        mostly deep learning for medical imaging and natural language
        processing. My work covers CT-scan diagnosis with convolutional neural
        networks, sign language interpretation, and emotion and abuse detection
        in Bangla text.{" "}
        <a
          href={profile.scholar}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white underline underline-offset-4 hover:text-[#915EFF]'
        >
          See citations on Google Scholar
        </a>
        .
      </motion.p>

      <div className='mt-14 flex flex-col gap-7'>
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.title}
            index={index}
            publication={publication}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");
