import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import StyleGuide from '@@utils/styleguide';
import Button from '@@components/Button';

import { FocusAwareStatusBar } from '../../App';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        {/* <View>
          <Text style={styles.welcomeText}>Welcome to Race Cards</Text>
        </View> */}
        <View style={styles.buttonContainer}>
          <Button
            label="Play Now"
            primary
            onPress={() => navigation.navigate('Play Race Cards!')}
          />
        </View>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Instructions')}>
          <Text style={styles.secondaryButtonText}>
            Learn more about Race Cards
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 100,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // TODO: extract a generic button style/component
  secondaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontWeight: '800',
    color: StyleGuide.colors.brandSecondary,
    fontSize: 16,
  },
});

export default WelcomeScreen;
