// TODO: Add drawer navigation
// TODO: Add instructions as initial route

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '@@screens/Welcome';
import Swipe from '@@screens/Swipe';
import StyleGuide from '@@utils/styleguide';
import DrawerButton from '@@components/nav/DrawerButton';

const InstructionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Here are some instructions, tips, etc.</Text>
    </View>
  );
};

const DonateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Be awesome. Donate to 904ward and the Race Cards project!</Text>
    </View>
  );
};

const ShareScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Share the experience...</Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        // style={styles.container}
        screenOptions={{
          gestureEnabled: true,
          // headerLeft: () => (
          //   <DrawerButton onPress={() => navigation.toggleDrawer()} />
          // ),
        }}
        drawerContentOptions={{
          activeTintColor: StyleGuide.colors.brandDark,
          activeBackgroundColor: StyleGuide.colors.backgroundLight,
          inactiveTintColor: StyleGuide.colors.backgroundLight,

          itemStyle: { marginVertical: 1 },
          style: styles.container,
        }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Play Race Cards!" component={Swipe} />
        <Drawer.Screen name="Instructions" component={InstructionsScreen} />
        <Drawer.Screen name="Donate" component={DonateScreen} />
        <Drawer.Screen name="Share" component={ShareScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
