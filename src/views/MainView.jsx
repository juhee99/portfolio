import React from 'react';
import IntroduceView from './IntroduceView';
import AboutView from './AboutView';
import SkillsView from './SkillsView';
import ProjectView from './ProjectView';
import CareerView from './CareerView';

function MainView() {
  return (
    <main className="pt-[64px]">
      <IntroduceView />
      <AboutView />
      <SkillsView />
      <ProjectView />
      <CareerView />
    </main>
  );
}

export default MainView;
