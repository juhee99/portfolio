import React from 'react';
import Container from '../componets/Container';
import IntroduceView from './IntroduceView';
import AboutView from './AboutView';
import SkillsView from './SkillsView';

function MainView() {
  return (
    <main className="pt-[64px]">
      <IntroduceView />
      <AboutView />
      <SkillsView />
      <Container name="project" />
      <Container name="career" />
    </main>
  );
}

export default MainView;
