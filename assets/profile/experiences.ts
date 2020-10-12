import { tags, Tag } from './tags';

export interface MonthAndYear {
  month: number;
  year: number;
}

export interface Company {
  name: string;
  website: string | null;
  logo: string | null;
}

export interface Experience {
  company: Company;
  role: string;
  from: MonthAndYear;
  to: MonthAndYear | null;
  description: string;
  tags: Tag[];
}

const experiences: Experience[] = [
  {
    company: {
      name: 'Tembeza International',
      website: 'https://www.tembeza.com',
      logo: '/images/companies/tembeza.png',
    },
    role: 'Senior Frontend Developer',
    description:
      'Frontend development of a well tested big Vue.js application.',
    from: {
      month: 6,
      year: 2020,
    },
    to: null,
    tags: [tags.VUE, tags.JS],
  },
  {
    company: {
      name: 'Passnfly',
      website: 'http://www.passnfly.com',
      logo: '/images/companies/passnfly.svg',
    },
    role: 'Senior Frontend Developer',
    description:
      'Frontend development with Vue.js. Leading a product migration to a modern stack (Webpack + Vue).',
    from: {
      month: 9,
      year: 2019,
    },
    to: {
      month: 6,
      year: 2019,
    },
    tags: [tags.VUE, tags.JS, tags.TS],
  },
  {
    company: {
      name: 'Housfy',
      website: 'http://www.housfy.com',
      logo: '/images/companies/housfy.svg',
    },
    role: 'Senior Frontend Developer',
    description:
      'Frontend development with Vue.js and Laravel. E2E testing with Cypress.',
    from: {
      month: 5,
      year: 2019,
    },
    to: {
      month: 7,
      year: 2019,
    },
    tags: [tags.VUE, tags.PHP, tags.JS],
  },
  {
    company: {
      name: 'Getinge Cetrea A/S',
      website: 'http://www.cetrea.com',
      logo: '/images/companies/getinge.svg',
    },
    role: 'Frontend Developer',
    description:
      'Frontend developer –taking the role of Feature Lead for some projects— as part of a globally distributed team responsible of the development of a healthcare solution meant for optimizing the patient flow. Despite of being mainly focused on the frontend (AngularJS), a lot of backend tasks (Java) have been done, together with some side projects with Node.js and other modern JS frameworks (Vue.js).',
    from: {
      month: 7,
      year: 2016,
    },
    to: {
      month: 5,
      year: 2019,
    },
    tags: [tags.ANGULAR, tags.JAVA, tags.JS, tags.TS],
  },
  {
    company: {
      name: 'HPE CDS',
      website: 'https://www.hpecds.com/',
      logo: '/images/companies/hpecds.png',
    },
    role: 'Business Application Engineer',
    description:
      'Financial web services back-end (mainly) and front-end development with the ABSIS TF7 architecture (Java EE).',
    from: {
      month: 5,
      year: 2015,
    },
    to: {
      month: 7,
      year: 2016,
    },
    tags: [tags.JAVA],
  },
  {
    company: {
      name: 'Hermes Comunicacions',
      website: 'https://www.linkedin.com/company/hermes-comunicacions/about/',
      logo: '/images/companies/hermes.svg',
    },
    role: 'Junior Software Developer',
    description:
      'Analysis and development of Joomla components (PHP + MySQL + HTML + jQuery), database design (MySQL), data transformation with ETL tools (Pentaho).',
    from: {
      month: 7,
      year: 2014,
    },
    to: {
      month: 4,
      year: 2015,
    },
    tags: [tags.JS, tags.PHP, tags.JQUERY],
  },
];

export default experiences;
