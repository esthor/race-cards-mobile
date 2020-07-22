import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import StyleGuide from '@@utils/styleguide';
import Text from './Text';

interface ButtonProps {
  label: string;
  primary?: boolean;
  onPress: () => void;
}

const Button = ({ label, primary, onPress }: ButtonProps) => {
  const { brandSecondary, white } = StyleGuide.colors;
  const color = primary ? white : brandSecondary;
  const backgroundColor = primary ? StyleGuide.colors.brandDark : undefined;
  const buttonType = primary ? 'button' : 'secondaryButton';
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={() => onPress()}>
      <Text type={buttonType} style={[styles.label, { color }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: StyleGuide.spacing * 2,
    borderRadius: StyleGuide.spacing,
    // Shadow
    // shadowColor: StyleGuide.colors.brandLight,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  label: {
    textAlign: 'center',
  },
});

export default Button;
