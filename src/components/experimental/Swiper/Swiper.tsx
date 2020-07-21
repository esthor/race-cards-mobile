import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import {
  PanGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated, {
  add,
  clockRunning,
  cond,
  debug,
  divide,
  eq,
  floor,
  not,
  set,
  useCode,
} from 'react-native-reanimated';
import {
  snapPoint,
  timing,
  useClock,
  usePanGestureHandler,
  useValue,
} from 'react-native-redash';

const { width, height } = Dimensions.get('window');
const cardWidth = width - 80;
const cardHeight = height - 240;

export const assets = [
  require('./assets/1.jpg'),
  require('./assets/2.jpg'),
  require('./assets/3.jpg'),
  require('./assets/4.jpg'),
  require('./assets/5.jpg'),
];

const snapPoints = assets.map((_, i) => i * -width);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    marginVertical: 100,
  },
  pictures: {
    width: width * assets.length,
    height: height,
    flexDirection: 'row',
    marginBottom: 40,
  },
  picture: {
    width: cardWidth,
    height: cardHeight,
    marginHorizontal: 40,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const Swiper = () => {
  const clock = useClock();
  const index = useValue(0);
  const offsetX = useValue(0);
  const translateX = useValue(0);
  const {
    gestureHandler,
    state,
    velocity,
    translation,
  } = usePanGestureHandler();
  const to = snapPoint(translateX, velocity.x, snapPoints);
  useCode(
    () => [
      cond(eq(state, State.ACTIVE), [
        set(translateX, add(offsetX, translation.x)),
      ]),
      cond(eq(state, State.END), [
        set(translateX, timing({ clock, from: translateX, to })),
        set(offsetX, translateX),
        cond(not(clockRunning(clock)), [
          set(index, floor(divide(translateX, -width))),
          debug('index', index),
        ]),
      ]),
    ],
    [],
  );
  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Animated.View
            style={[styles.pictures, { transform: [{ translateX }] }]}>
            {assets.map((source) => (
              // <TouchableOpacity onPress={() => console.log('hello')}>
              <View key={source} style={styles.picture}>
                <Image style={styles.image} {...{ source }} />
              </View>
              // </TouchableOpacity>
            ))}
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default Swiper;
