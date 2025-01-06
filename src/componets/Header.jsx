import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed top-0 navbar bg-success-content text-white shadow-neutral-400 shadow px-5 min-h-16 max-h-16 z-50">
      <div className="flex w-full justify-between">
        <Link
          to="introduce"
          smooth
          duration={500}
          className="cursor-pointer text-white text-lg md:text-2xl "
        >
          JuHee Portfolio
        </Link>
        <nav className="flex text-sm lg:text-lg space-x-2 lg:space-x-5 p-2">
          <Link
            to="aboutMe"
            smooth
            duration={500}
            activeClass="text-yellow-400 font-bold"
            className="cursor-pointer text-white hover:text-yellow-400"
          >
            About Me
          </Link>
          <Link
            to="skill"
            smooth
            duration={500}
            activeClass="text-yellow-400 font-bold"
            className="cursor-pointer text-white hover:text-yellow-400"
          >
            Skill
          </Link>
          <Link
            to="project"
            smooth
            duration={500}
            activeClass="text-yellow-400 font-bold"
            className="cursor-pointer text-white hover:text-yellow-400"
          >
            Project
          </Link>
          <Link
            to="career"
            smooth
            duration={500}
            activeClass="text-yellow-400 font-bold"
            className="cursor-pointer text-white hover:text-yellow-400"
          >
            Career
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;