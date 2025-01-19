import React from 'react';
import InLabContent from '../views/project/InLabContent';
import RefreshContent from '../views/project/RefreshContent';
import { closetMarkdown, inlabMarkdown, refreshMarkdown } from './markdown';
import ClosetContent from '../views/project/ClosetContent';
import PortfolioContent from '../views/project/PortfolioContent';

const baseUrl = '/img/project';

const inlabContent = {
  title: (
    <div className="flex w-full justify-center">
      <img
        alt="inlab_logo"
        src={`${process.env.PUBLIC_URL}${baseUrl}/inlab/logo-color.svg`}
        className="w-24"
      />
    </div>
  ),
  period: '2023.06.10 ~ 2023.7.23 ( 4人 )',
  imgList: [
    { src: `${baseUrl}/inlab/Architecture.png`, key: 1 },
    { src: `${baseUrl}/inlab/inlab_dfd.png`, key: 2 },
    { src: `${baseUrl}/inlab/question.png`, key: 3 },
    { src: `${baseUrl}/inlab/result.png`, key: 4 },
  ],
  skills: ['Spring Boot', 'JPA', 'QueryDSL', 'MySQL', 'Vue3', 'Tailwind CSS'],
  content: <InLabContent />,
  modalName: 'InLab',
  markdown: inlabMarkdown,
};

const refreshContent = {
  title: (
    <div className="flex w-full justify-center">
      <img
        alt="refresh_logo"
        src={`${process.env.PUBLIC_URL}${baseUrl}/refresh/logo.png`}
        className="w-24"
      />
    </div>
  ),
  period: '2023.05.31 ~ 2023.06.08 ( 4人 )',
  imgList: [
    { src: `${baseUrl}/refresh/refresh_dfd.png`, key: 1 },
    { src: `${baseUrl}/refresh/sequence.png`, key: 2 },
    { src: `${baseUrl}/refresh/userView.png`, key: 3 },
    { src: `${baseUrl}/refresh/adminView.png`, key: 4 },
  ],
  skills: ['Spring Boot', 'MyBatis', 'MySQL', 'Vue3', 'Tailwind CSS'],
  content: <RefreshContent />,
  modalName: 'REfresh',
  markdown: refreshMarkdown,
};

const closetContent = {
  title: 'The Closet',
  period: '2022.03 ~ 2022.05 ( 3人 )',
  imgList: [
    { src: `${baseUrl}/closet/architecture.png`, key: 1 },
    { src: `${baseUrl}/closet/list.png`, key: 2 },
    { src: `${baseUrl}/closet/main.png`, key: 3 },
  ],
  skills: ['Spring Boot', 'JPA', 'thymeleaf', 'Mariadb', 'tensorflows', 'HTML'],
  content: <ClosetContent />,
  modalName: 'closet',
  markdown: closetMarkdown,
};
const portfolioContent = {
  title: 'JUHEE PORTFOLIO',
  period: '2024.12.31 ~ 2025.01.31 ( 1人 )',
  imgList: [
    { src: `${baseUrl}/portfolio/main.png`, key: 1 },
    { src: `${baseUrl}/portfolio/skill.png`, key: 2 },
    { src: `${baseUrl}/portfolio/markdown.png`, key: 3 },
  ],
  skills: ['React', 'TailwindCSS', 'Daisyui'],
  content: <PortfolioContent />,
};

const projectList = [
  inlabContent,
  refreshContent,
  closetContent,
  portfolioContent,
];

export default projectList;
