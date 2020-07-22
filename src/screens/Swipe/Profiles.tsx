import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Animated, {
  Value,
  Clock,
  interpolate,
  concat,
  Extrapolate,
  block,
  cond,
  set,
  useCode,
  not,
  clockRunning,
  call,
} from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';
import { RectButton } from 'react-native-gesture-handler';

import { timing } from '@@components';
import StyleGuide from '@@utils/styleguide';
import Button from '@@components/Button';

import Card, { Profile } from './Profile';
import Swipeable from './Swipeable';
import { cardsData } from './Swipe';

const { width, height } = Dimensions.get('window');
const deltaX = width / 2;
const α = Math.PI / 12;
const A = Math.round(width * Math.cos(α) + height * Math.sin(α));
const snapPoints = [-A, 0, A];

interface ProfilesProps {
  cardsData: Profile[];
}

const Profiles = ({ profiles }: ProfilesProps) => {
  const [index, setIndex] = useState(0);
  const { x, y, offsetX, swipe } = useMemoOne(
    () => ({
      x: new Value(0),
      y: new Value(0),
      offsetX: new Value(0),
      swipe: new Value(0) as Animated.Value<0 | 1>,
    }),
    [],
  );
  const onSnap = useMemoOne(
    () => ([point]: readonly number[]) => {
      if (point !== 0) {
        offsetX.setValue(0);
        setIndex((index + 1) % cardsData.length);
      }
    },
    [index, offsetX, cardsData.length],
  );
  const card = cardsData[index];
  const rotateZ = concat(
    interpolate(x, {
      inputRange: [-1 * deltaX, deltaX],
      outputRange: [α, -1 * α],
      extrapolate: Extrapolate.CLAMP,
    }),
    'rad',
  );
  const likeOpacity = interpolate(x, {
    inputRange: [0, deltaX / 4],
    outputRange: [0, 1],
  });
  const nopeOpacity = interpolate(x, {
    inputRange: [(-1 * deltaX) / 4, 0],
    outputRange: [1, 0],
  });
  const translateX = x;
  const translateY = y;
  const clock = new Clock();
  useCode(
    () =>
      block([
        cond(swipe, [
          set(
            offsetX,
            timing({
              clock,
              from: offsetX,
              to: -A,
            }),
          ),
          cond(not(clockRunning(clock)), [set(swipe, 0), call([], onSnap)]),
        ]),
      ]),
    [swipe, offsetX, clock, onSnap],
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.cards}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: [{ translateX }, { translateY }, { rotateZ }],
          }}>
          <Card {...{ card, likeOpacity, nopeOpacity }} />
        </Animated.View>
        <Swipeable key={index} {...{ snapPoints, onSnap, x, y, offsetX }} />
      </View>
      <View style={styles.footer}>
        <Button label="Shuffle" primary onPress={() => swipe.setValue(1)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cards: {
    flex: 1,
    marginHorizontal: 16,
    zIndex: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
});

export default Profiles;
