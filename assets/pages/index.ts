export interface Page {
  index: number;
  title: string;
  longTitle: string;
  color: string;
  routeName: string;
}

const pages: Page[] = [
  {
    index: 0,
    title: 'About me',
    longTitle: '',
    color: 'green',
    routeName: 'index',
  },
  {
    index: 1,
    title: 'Skills',
    longTitle: 'See my skills',
    color: 'orange',
    routeName: 'skills',
  },
  {
    index: 2,
    title: 'Experience',
    longTitle: 'Check my experience',
    color: 'blue',
    routeName: 'experience',
  },
  {
    index: 3,
    title: 'Projects',
    longTitle: 'Take a look at my projects',
    color: 'teal',
    routeName: 'projects',
  },
  {
    index: 4,
    title: 'Education',
    longTitle: 'Know about my education',
    color: 'yellow',
    routeName: 'education',
  },
  {
    index: 5,
    title: 'Contact',
    longTitle: 'Contact me',
    color: 'purple',
    routeName: 'contact',
  },
];

export default pages;
