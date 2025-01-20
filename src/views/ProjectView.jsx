import React from 'react';
import { Element } from 'react-scroll';
import ProjectBox from '../componets/ProjectBox';
import projectList from '../data/projectData';

function ProjectView() {
  return (
    <Element
      name="project"
      className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center bg-gray-100 text-gray-50 pb-20"
    >
      <section className="container max-w-6xl mx-auto p-6 space-y-12">
        <h2 className="max-w-7xl text-4xl mb-14 text-left font-bold underline underline-offset-8 text-blue-800">
          PROJECT
        </h2>
        {projectList.map(project => (
          <ProjectBox content={project} />
        ))}
      </section>
    </Element>
  );
}

export default ProjectView;
