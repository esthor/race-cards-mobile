import React, { ReactNode } from 'react';
import { TextProps as OriginalTextProps, Text as RNText } from 'react-native';

import StyleGuide from '@@utils/styleguide';

export interface TextProps extends OriginalTextProps {
  // colored?: boolean;
  type?: keyof typeof StyleGuide['typography'];
  children: ReactNode;
}

const Text = ({ type, style, children }: TextProps) => {
  const { brandSecondary, white } = StyleGuide.colors;
  const color = type === 'secondaryButton' ? brandSecondary : white; // hacky af
  console.log(color);
  return (
    <RNText style={[StyleGuide.typography[type || 'body'], { color }, style]}>
      {children}
    </RNText>
  );
};

export default Text;
