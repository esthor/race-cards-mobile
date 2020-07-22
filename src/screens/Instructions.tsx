import React from 'react';
import { SafeAreaView, StyleSheet, Linking, View } from 'react-native';

import StyleGuide from '@@utils/styleguide';
import Text from '@@components/Text';
import Button from '@@components/Button';

import { FocusAwareStatusBar } from '../../App';

const InstructionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <Text type="header">The Race Cards Instructions</Text>
        <Text>
          Gather a group of friends, family, colleagues, neighbors, and anyone
          you know (or don’t!). The Race Cards are designed to promote
          conversations with people with a variety of perspectives. You and your
          guests will get the most out of this experience if you make sure your
          group is diverse...
        </Text>
        <Button
          label="See the full guide online"
          onPress={() =>
            Linking.openURL(
              'https://f047ca0b-8106-4e6b-8a44-4442d206b226.filesusr.com/ugd/ea1d05_5d86f283182a4ecfa6c772a47262b80d.pdf',
            ).catch((err) => console.error("Couldn't load page", err))
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingTop: StyleGuide.spacing * 3,
  },
});

export default InstructionsScreen;
