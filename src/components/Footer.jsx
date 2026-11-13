import React from "react";

import { styles } from "../styles";
import { profile } from "../constants";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Google Scholar", href: profile.scholar },
  { label: "Email", href: `mailto:${profile.email}` },
];

const Footer = () => (
  <footer
    className={`${styles.paddingX} relative z-10 py-8 border-t border-white/10`}
  >
    <div className='max-w-7xl mx-auto flex sm:flex-row flex-col gap-4 justify-between items-center'>
      <p className='text-secondary text-[14px]'>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul className='list-none flex flex-wrap justify-center gap-6'>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel='noopener noreferrer'
              className='text-secondary hover:text-white text-[14px] font-medium'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
