import React from 'react';
import { SafeAreaView, StyleSheet, View, Linking } from 'react-native';

import StyleGuide from '@@utils/styleguide';
import Text from '@@components/Text';
import Button from '@@components/Button';

import { FocusAwareStatusBar } from '../../App';

const DonateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <Text type="header">Donate to 904ward</Text>
        <Button
          label="Donate Online"
          primary
          onPress={() =>
            Linking.openURL('https://www.904ward.org/donate').catch((err) =>
              console.error("Couldn't load page", err),
            )
          }
        />
        <Button
          label="Questions? donate@904WARD.org"
          onPress={() =>
            Linking.openURL(
              'mailto:donate@904WARD.org?subject=MobileAppQuestion',
            ).catch((err) => console.error("Couldn't load email client", err))
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: StyleGuide.spacing * 3,
  },
});

export default DonateScreen;
