export interface Page {
  index: number;
  title: string;
  longTitle: string;
  colorClass: string;
  colorName: string;
  routeName: string;
}

const pages: Page[] = [
  {
    index: 0,
    title: 'About me',
    longTitle: '',
    colorClass: 'teal',
    colorName: 'teal',
    routeName: 'index',
  },
  {
    index: 1,
    title: 'Skills',
    longTitle: 'See my skills',
    colorClass: 'yellow',
    colorName: 'amber',
    routeName: 'skills',
  },
  {
    index: 2,
    title: 'Experience',
    longTitle: 'Check my experience',
    colorClass: 'blue',
    colorName: 'blue',
    routeName: 'experience',
  },
  {
    index: 3,
    title: 'Projects',
    longTitle: 'Take a look at my projects',
    colorClass: 'red',
    colorName: 'red',
    routeName: 'projects',
  },
  {
    index: 4,
    title: 'Contact',
    longTitle: 'Contact me',
    colorClass: 'purple',
    colorName: 'violet',
    routeName: 'contact',
  },
];

export default pages;
