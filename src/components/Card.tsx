import * as React from 'react';
import { Dimensions, Image, ImageStyle, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import * as cardAssets from '@@assets/cards';

import StyleGuide from './StyleGuide';

type CardId = number;
interface Card {
  id: CardId;
  source: number;
}

export const cards: Card[] = [
  {
    id: 0,
    source: cardAssets.one,
  },
  {
    id: 1,
    source: cardAssets.one,
  },
  {
    id: 2,
    source: cardAssets.one,
  },
];

const { width } = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1324 / 863;
export const CARD_WIDTH = width - StyleGuide.spacing * 8;
export const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 18,
  },
  flexibleContainer: {
    flex: 1,
    maxWidth: '100%',
    aspectRatio: CARD_ASPECT_RATIO,
    margin: StyleGuide.spacing,
    borderRadius: 18,
    resizeMode: 'contain',
  },
});

export interface CardProps {
  card: Card;
}

interface FlexibleCardProps extends CardProps {
  style?: Animated.AnimateStyle<ImageStyle>;
}

export const FlexibleCard = ({ card, style }: FlexibleCardProps) => (
  <Animated.Image
    style={[styles.flexibleContainer, style]}
    source={card.source}
  />
);

const Card = ({ card }: CardProps) => {
  return <Image style={styles.container} source={card.source} />;
};

export default Card;
