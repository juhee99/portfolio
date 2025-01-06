import React from 'react';
import Container from '../componets/Container';
import IntroduceView from './IntroduceView';
import AboutView from './AboutView';

function MainView() {
  return (
    <main className="pt-[64px]">
      <IntroduceView />
      <AboutView />
      <Container name="skill" />
      <Container name="project" />
      <Container name="career" />
    </main>
  );
}

export default MainView;
