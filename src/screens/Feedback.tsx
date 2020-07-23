import React from 'react';
import { SafeAreaView, StyleSheet, View, Linking } from 'react-native';

import StyleGuide from '@@utils/styleguide';
import Text from '@@components/Text';
import Button from '@@components/Button';

import { FocusAwareStatusBar } from '../../App';

const FeedbackScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <Text type="header" style={{ textAlign: 'center' }}>
          Help us make the app even better!
        </Text>
        <Button
          label="Submit Feedback"
          primary
          onPress={() =>
            Linking.openURL(
              'mailto:racecardfeedback@904ward.com?subject=MobileAppFeedback',
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

export default FeedbackScreen;
