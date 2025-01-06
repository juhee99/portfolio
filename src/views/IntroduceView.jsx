import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

function IntroduceView() {
  const handleGitIcon = () => {
    window.open(process.env.REACT_APP_GIT_URL, '_blank');
  };

  const handleInstagramIcon = () => {
    window.open(process.env.REACT_APP_INSTAGRAM_URL, '_blank');
  };

  return (
    <Element
      name="introduce"
      className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center bg-black text-gray-50"
    >
      <section className="container max-w-6xl mx-auto p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 ">
            <p className="mb-5"> WEB ENGINEER</p>
            <span className="text-yellow-500">JU HEE</span> PARK PORTFOLIO
            <span className="text-yellow-500 animate-pulse"> :)</span>
          </h1>
          <div className="flex space-x-3">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="text-2xl "
              onClick={handleGitIcon}
            />
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-2xl "
              onClick={handleInstagramIcon}
            />
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/img/profile.jpg`}
            alt="profile"
            className="rounded-full w-64 h-64 object-cover shadow-lg shadow-white"
          />
        </div>
      </section>
    </Element>
  );
}

export default IntroduceView;
