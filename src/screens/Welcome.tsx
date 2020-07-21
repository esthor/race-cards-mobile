import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import StyleGuide from '@@utils/styleguide';
import DrawerButton from '@@components/nav/DrawerButton';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.headerText}>{'<- Swipe here to navigate'}</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.welcomeText}>Race Cards!</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Play Race Cards!')}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  contentContainer: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  // TODO: extract to text styles
  welcomeText: {
    fontWeight: '800',
    color: StyleGuide.colors.brandLight,
    fontSize: 36,
    alignSelf: 'center',
  },
  // TODO: extract a generic button style/component
  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleGuide.colors.brandLight,
    borderRadius: 8,
    height: 75,
    width: 150,
    margin: 20,
    // Shadow
    shadowColor: StyleGuide.colors.brand,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  primaryButtonText: {
    fontWeight: '800',
    // TODO: brand colors
    color: StyleGuide.colors.white,
    fontSize: 22,
  },
  secondaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    // TODO: brand colors
    backgroundColor: StyleGuide.colors.gray,
    borderRadius: 8,
    height: 35,
    width: 300,
    opacity: 0.8,
    // Shadow
    shadowColor: StyleGuide.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  secondaryButtonText: {
    fontWeight: '800',
    color: StyleGuide.colors.brandDark,
    fontSize: 16,
  },
});

export default WelcomeScreen;
