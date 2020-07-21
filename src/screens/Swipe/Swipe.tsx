import * as React from 'react';

import * as cards from '@@assets/cards';
import { Profile } from './Profile';
import Profiles from './Profiles';

export const cardsData: Profile[] = [
  {
    id: '1',
    category: 'Topical',
    intensity: 3,
    question1: 'Do white people have it easier in American than minorities?',
    question2: 'Can you give an example of why you feel the way you do?',
    profile: cards.one,
  },
  {
    id: '2',
    category: 'Topical',
    intensity: 3,
    question1: 'Do white people have it easier in American than minorities?',
    question2: 'Can you give an example of why you feel the way you do?',
    profile: cards.two,
  },
  {
    id: '3',
    category: 'Topical',
    intensity: 3,
    question1: 'Do white people have it easier in American than minorities?',
    question2: 'Can you give an example of why you feel the way you do?',
    profile: cards.three,
  },
  {
    id: '4',
    category: 'Topical',
    intensity: 3,
    question1: 'Do white people have it easier in American than minorities?',
    question2: 'Can you give an example of why you feel the way you do?',
    profile: cards.four,
  },
  {
    id: '4',
    category: 'Topical',
    intensity: 3,
    question1: 'Do white people have it easier in American than minorities?',
    question2: 'Can you give an example of why you feel the way you do?',
    profile: cards.five,
  },
  {
    id: '4',
    category: 'Topical',
    intensity: 3,
    question1: 'Do white people have it easier in American than minorities?',
    question2: 'Can you give an example of why you feel the way you do?',
    profile: cards.six,
  },
  {
    id: '4',
    category: 'Topical',
    intensity: 3,
    question1: 'Do white people have it easier in American than minorities?',
    question2: 'Can you give an example of why you feel the way you do?',
    profile: cards.seven,
  },
];

const Swipe = () => {
  return <Profiles {...{ cardsData }} />;
};

export default Swipe;
