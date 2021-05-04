import { Component } from 'vue';
import {
  HeroiconsTrendingUpOutline,
  HeroiconsLightBulbOutline,
  HeroiconsThumbUpOutline,
  HeroiconsUserGroupOutline,
  HeroiconsGlobeOutline,
  HeroiconsTranslateOutline,
} from '@bytegem/vue-heroicons/lib/icons';

export interface Skill {
  name: string;
  icon: Component;
  text: string;
}

export const skills: Skill[] = [
  {
    name: 'Continuous learning',
    icon: HeroiconsTrendingUpOutline,
    text: `Despite being **specialized in frontend**, there's always room for **learning** something new.`,
  },
  {
    name: 'Product improvement',
    icon: HeroiconsLightBulbOutline,
    text:
      'My main goal is to **contribute** into making a **better product** in every aspect I can.',
  },
  {
    name: 'Best practices',
    icon: HeroiconsThumbUpOutline,
    text: `**Code quality** doesn't guarantee a good product, but a poor code will always end up with long-term issues.`,
  },
  {
    name: 'Team player',
    icon: HeroiconsUserGroupOutline,
    text:
      'I enjoy **learning** from others while **mentoring** is one of the most rewarding things to do.',
  },
  {
    name: 'Remote proficiency',
    icon: HeroiconsGlobeOutline,
    text:
      'I turned **home** into my perfect **office** for having a perfect **coding and communication** experience.',
  },
  {
    name: 'Spoken languages',
    icon: HeroiconsTranslateOutline,
    text: `Native **Catalan** and **Spanish** speaker, I'm fluent in **English**. Unsuccessfully trying to learn **Japanese**. すみません。`,
  },
];
