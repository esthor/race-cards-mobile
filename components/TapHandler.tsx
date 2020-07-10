import React, { ReactNode } from "react";
import Animated, {
  Easing,
  Value,
  useCode,
  block,
  cond,
  eq,
  set,
  call,
  onChange,
  and,
  neq,
} from "react-native-reanimated";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import { contains, onGestureEvent } from "react-native-redash";

import { delay, timing } from "./AnimationHelpers";

interface TapHandlerProps {
  value: Animated.Value<number>;
  onPress: () => void;
  children: ReactNode;
}

const { BEGAN, FAILED, CANCELLED, END, UNDETERMINED } = State;
const easing = Easing.inOut(Easing.ease);
const duration = 250;

const TapHandler = ({ onPress, children, value }: TapHandlerProps) => {
  const shouldSpring = new Value(0);
  const state = new Value(UNDETERMINED);
  const gestureHandler = onGestureEvent({ state });
  useCode(
    () =>
      block([
        cond(eq(state, BEGAN), set(shouldSpring, 1)),
        cond(contains([FAILED, CANCELLED], state), set(shouldSpring, 0)),
        onChange(state, cond(eq(state, END), call([], onPress))),
        cond(eq(state, END), [delay(set(shouldSpring, 0), duration)]),
        cond(
          and(eq(shouldSpring, 1), neq(value, 1)),
          set(
            value,
            timing({
              from: value,
              to: 1,
              easing,
              duration,
            })
          )
        ),
        cond(
          and(eq(shouldSpring, 0), neq(value, 0)),
          set(
            value,
            timing({
              from: value,
              to: 0,
              easing,
              duration,
            })
          )
        ),
      ]),
    [onPress, shouldSpring, state, value]
  );
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default TapHandler;
