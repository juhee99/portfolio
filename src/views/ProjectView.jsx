import React from 'react';
import { Element } from 'react-scroll';
import ProjectBox from '../componets/ProjectBox';
import projectList from '../data/projectData';

// const projectList = [
//   { title: '대한송유관', description: 'abe' },
//   { title: 'Refresh', description: '연차시스템' },
//   { title: 'inLab', description: '면접관을 위한 면접시스템' },
// ];

function ProjectView() {
  return (
    <Element
      name="project"
      className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center bg-gray-100 text-gray-50"
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
