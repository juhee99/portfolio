import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skillsList from '../data/skillsData';
import SkillTag from '../componets/SkillTag';

function SkillsView() {
  return (
    <Element
      name="skills"
      className="w-full flex text-black items-center justify-center bg-yellow-400"
    >
      <section className="container max-w-6xl mx-auto p-6 ">
        <h2 className="max-w-7xl text-4xl mb-16 text-left font-bold underline underline-offset-8">
          SKILLS
        </h2>
        <div className="bg-amber-100 p-8 rounded-lg shadow-lg w-5/6 mx-auto mb-4">
          {skillsList.map(item => (
            <div
              className="flex w-full items-start py-2 last:py-0"
              key={item.name}
            >
              <div className="flex space-x-2 w-1/4 items-center min-w-36">
                <FontAwesomeIcon icon={item.icon} />
                <h3 className="w-1/4 font-semibold text-lg">{item.name}</h3>
              </div>
              <div className="w-3/4 justify-start">
                {item.skills.map(skill => (
                  <SkillTag skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}

export default SkillsView;
