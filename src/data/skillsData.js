import {
  faServer,
  faFont,
  faComputer,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';

const skillsList = [
  {
    name: 'Languages',
    icon: faFont,
    skills: [
      {
        name: 'JavaScript',
        color: '#f7df1e',
        level: 'Familiar',
        text: 'text-black',
      },
      { name: 'Java', color: '#3178C6', level: 'Familiar' },
      { name: 'Python', color: '#3776AB', level: 'experience' },
    ],
  },
  {
    name: 'Frontend',
    icon: faComputer,
    skills: [
      {
        name: 'React',
        color: '#61DAFB',
        level: 'Familiar',
        text: 'text-black',
      },
      {
        name: 'Vue',
        color: '#4FC08D',
        level: 'Experience',
        text: 'text-black',
      },
      {
        name: 'Redux',
        color: '#61DAFB',
        level: 'Familiar',
        text: 'text-black',
      },
      {
        name: 'Tailwind CSS',
        color: '#06B6D4',
        level: 'Familiar',
        text: 'text-black',
      },
    ],
  },
  {
    name: 'Backend',
    icon: faServer,
    skills: [
      {
        name: 'Spring Boot',
        color: '#339933',
        level: 'Familiar',
      },
      {
        name: 'JPA',
        color: '#000000',
        level: 'experience',
      },
      {
        name: 'MyBatis',
        color: '#092E20',
        level: 'Familiar',
      },
      {
        name: 'QueryDsl',
        color: '#009688',
        level: 'experience',
      },
      {
        name: 'MySQL',
        color: '#F29111',
        level: 'Familiar',
      },
    ],
  },
  {
    name: 'Tools',
    icon: faScrewdriverWrench,
    skills: [
      { name: 'Git', color: '#F05032', level: 'Familiar' },
      { name: 'Jira', color: '#0052CC ', level: 'experience' },
    ],
  },
];

export default skillsList;
