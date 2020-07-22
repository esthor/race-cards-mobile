import React from 'react';
import { SafeAreaView, StyleSheet, Share } from 'react-native';

import StyleGuide from '@@utils/styleguide';
import Button from '@@components/Button';

import { FocusAwareStatusBar } from '../../App';

const ShareScreen = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Play The Race Cards | An inclusive community begins with understanding each other better.',
        url: 'https://www.904ward.org/the-race-cards-1',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <Button label="Share 904ward's Race Cards" onPress={() => onShare()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShareScreen;
