import React from 'react';
import Container from '../componets/Container';
import IntroduceView from './IntroduceView';
import AboutView from './AboutView';
import SkillsView from './SkillsView';
import ProjectView from './ProjectView';

function MainView() {
  return (
    <main className="pt-[64px]">
      <IntroduceView />
      <AboutView />
      <SkillsView />
      <ProjectView />
      <Container name="career" />
    </main>
  );
}

export default MainView;
