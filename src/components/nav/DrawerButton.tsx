import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import StyleGuide from '@@utils/styleguide';

const DrawerButton = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.headerText}>{'<- Swipe here to navigate'}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: 20,
    marginTop: 30,
  },
  // TODO: extract to text styles
  headerText: {
    fontWeight: '800',
    color: StyleGuide.colors.brandDark,
    fontSize: 16,
  },
});

export default DrawerButton;
