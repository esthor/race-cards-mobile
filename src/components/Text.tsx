import React, { ReactNode } from 'react';
import {
  TextProps as OriginalTextProps,
  Text as RNText,
  TextStyle,
} from 'react-native';

import StyleGuide from '@@utils/styleguide';

export interface TextProps extends OriginalTextProps {
  style?: TextStyle;
  type?: keyof typeof StyleGuide['typography'];
  children: ReactNode;
}

const Text = ({ type, style, children }: TextProps) => {
  const { brandSecondary, white } = StyleGuide.colors;
  const color = type === 'secondaryButton' ? brandSecondary : white; // hacky af
  return (
    <RNText style={[StyleGuide.typography[type || 'body'], { color }, style]}>
      {children}
    </RNText>
  );
};

export default Text;
