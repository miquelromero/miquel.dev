interface Page {
  title: string;
  color: string;
  routeName: string;
}

const pages: Page[] = [
  {
    title: 'About',
    color: 'green',
    routeName: 'index',
  },
  {
    title: 'Experience',
    color: 'blue',
    routeName: 'experience',
  },
  {
    title: 'Projects',
    color: 'orange',
    routeName: 'projects',
  },
  {
    title: 'Skills',
    color: 'teal',
    routeName: 'skills',
  },
  {
    title: 'Education',
    color: 'yellow',
    routeName: 'education',
  },
  {
    title: 'Contact',
    color: 'purple',
    routeName: 'contact',
  },
];

export default pages;
