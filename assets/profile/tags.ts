export interface Tag {
  tag: string;
  name: string;
  primaryColor: string | null;
  secondaryColor: string | null;
}

export const tags: { [index: string]: Tag } = {
  VUE: {
    tag: 'vue',
    name: 'Vue.js',
    primaryColor: '#41b883',
    secondaryColor: 'black',
  },
  ANGULAR: {
    tag: 'angular',
    name: 'Angular JS',
    primaryColor: '#dd0031',
    secondaryColor: 'white',
  },
  JAVA: {
    tag: 'java',
    name: 'Java',
    primaryColor: '#0C7CB0',
    secondaryColor: 'white',
  },
  PHP: {
    tag: 'php',
    name: 'PHP',
    primaryColor: '#8892bf',
    secondaryColor: 'black',
  },
  JS: {
    tag: 'js',
    name: 'JavaScript',
    primaryColor: '#f7df1e',
    secondaryColor: 'black',
  },
  TS: {
    tag: 'ts',
    name: 'TypeScript',
    primaryColor: '#3178c6',
    secondaryColor: 'white',
  },
  FLUTTER: {
    tag: 'flutter',
    name: 'Flutter',
    primaryColor: '#46d1fd',
    secondaryColor: 'black',
  },
  NODEJS: {
    tag: 'nodejs',
    name: 'Node.js',
    primaryColor: '#80bd01',
    secondaryColor: 'black',
  },
  JQUERY: {
    tag: 'jquery',
    name: 'jQuery',
    primaryColor: '#0769ad',
    secondaryColor: 'white',
  },
};
