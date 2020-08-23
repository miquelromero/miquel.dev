interface Page {
  index: number;
  title: string;
  color: string;
  routeName: string;
}

const pages: Page[] = [
  {
    index: 0,
    title: 'About',
    color: 'green',
    routeName: 'index',
  },
  {
    index: 1,
    title: 'Experience',
    color: 'blue',
    routeName: 'experience',
  },
  {
    index: 2,
    title: 'Projects',
    color: 'orange',
    routeName: 'projects',
  },
  {
    index: 3,
    title: 'Skills',
    color: 'teal',
    routeName: 'skills',
  },
  {
    index: 4,
    title: 'Education',
    color: 'yellow',
    routeName: 'education',
  },
  {
    index: 5,
    title: 'Contact',
    color: 'purple',
    routeName: 'contact',
  },
];

export default pages;
