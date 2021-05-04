import { Component } from 'vue';
import {
  TrendingUpIcon,
  LightBulbIcon,
  ThumbUpIcon,
  UserGroupIcon,
  GlobeIcon,
  TranslateIcon,
} from '@vue-hero-icons/outline';

export interface Skill {
  name: string;
  icon: Component;
  text: string;
}

export const skills: Skill[] = [
  {
    name: 'Continuous learning',
    icon: TrendingUpIcon,
    text: `Despite being **specialized in frontend**, there's always room for **learning** something new.`,
  },
  {
    name: 'Product improvement',
    icon: LightBulbIcon,
    text:
      'My main goal is to **contribute** into making a **better product** in every aspect I can.',
  },
  {
    name: 'Best practices',
    icon: ThumbUpIcon,
    text: `**Code quality** doesn't guarantee a good product, but a poor code will always end up with long-term issues.`,
  },
  {
    name: 'Team player',
    icon: UserGroupIcon,
    text:
      'I enjoy **learning** from others while **mentoring** is one of the most rewarding things to do.',
  },
  {
    name: 'Remote proficiency',
    icon: GlobeIcon,
    text:
      'I turned **home** into my perfect **office** for having a perfect **coding and communication** experience.',
  },
  {
    name: 'Spoken languages',
    icon: TranslateIcon,
    text: `Native **Catalan** and **Spanish** speaker, I'm fluent in **English**. Unsuccessfully trying to learn **Japanese**. すみません。`,
  },
];
