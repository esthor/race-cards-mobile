import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import * as cards from '@@assets/cards';
import StyleGuide from '@@utils/styleguide';

import { Profile } from './Profile';
import Profiles from './Profiles';
import { FocusAwareStatusBar } from '../../../App';

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
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <Profiles {...{ cardsData }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
  },
});
export default Swipe;
