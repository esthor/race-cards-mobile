import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { hamburger } from '@@assets/icons';

const DrawerButton = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Image source={hamburger} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 40,
  },
  // TODO: extract to text styles
  icon: {
    height: 26,
    width: 26,
  },
});

export default DrawerButton;
