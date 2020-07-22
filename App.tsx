// TODO: Add drawer navigation
// TODO: Add instructions as initial route

import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DrawerActions,
  useIsFocused,
} from '@react-navigation/native';

import WelcomeScreen from '@@screens/Welcome';
import Swipe from '@@screens/Swipe';
import StyleGuide from '@@utils/styleguide';
import DrawerButton from '@@components/nav/DrawerButton';

// TODO: Extract these helpers
// | Helpers

export function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

// | Screens

const InstructionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <Text>Here are some instructions, tips, etc.</Text>
    </SafeAreaView>
  );
};

const DonateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <Text>Be awesome. Donate to 904ward and the Race Cards project!</Text>
    </SafeAreaView>
  );
};

const ShareScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <Text>Share the experience...</Text>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();

// TODO: Extact all these to their own components in a `nav` folder, and alias it.
const HomeStack = createStackNavigator();
const PlayStack = createStackNavigator();
const InstructionsStack = createStackNavigator();
const DonateStack = createStackNavigator();
const ShareStack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // TODO: This header styling should be shared, not repeated
        headerStyle: {
          backgroundColor: StyleGuide.colors.backgroundDark,
          shadowColor: 'transparent', // Remove react navigation's default bottom hairline border
        },
        headerTintColor: StyleGuide.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 32,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
const Play = ({ navigation }) => {
  return (
    <PlayStack.Navigator
      screenOptions={{
        // TODO: This header styling should be shared, not repeated
        headerStyle: {
          backgroundColor: StyleGuide.colors.backgroundDark,
          shadowColor: 'transparent', // Remove react navigation's default bottom hairline border
        },
        headerTintColor: StyleGuide.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 32,
        },
      }}>
      <PlayStack.Screen
        name="Play"
        component={Swipe}
        options={{
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
    </PlayStack.Navigator>
  );
};
const Instructions = ({ navigation }) => {
  return (
    <InstructionsStack.Navigator
      screenOptions={{
        // TODO: This header styling should be shared, not repeated
        headerStyle: {
          backgroundColor: StyleGuide.colors.backgroundDark,
          shadowColor: 'transparent', // Remove react navigation's default bottom hairline border
        },
        headerTintColor: StyleGuide.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 32,
        },
      }}>
      <InstructionsStack.Screen
        name="Instructions"
        component={InstructionsScreen}
        options={{
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
    </InstructionsStack.Navigator>
  );
};
const Donate = ({ navigation }) => {
  return (
    <DonateStack.Navigator
      screenOptions={{
        // TODO: This header styling should be shared, not repeated
        headerStyle: {
          backgroundColor: StyleGuide.colors.backgroundDark,
          shadowColor: 'transparent', // Remove react navigation's default bottom hairline border
        },
        headerTintColor: StyleGuide.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 32,
        },
      }}>
      <DonateStack.Screen
        name="Donate"
        component={DonateScreen}
        options={{
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
    </DonateStack.Navigator>
  );
};
const Share = ({ navigation }) => {
  return (
    <ShareStack.Navigator
      screenOptions={{
        // TODO: This header styling should be shared, not repeated
        headerStyle: {
          backgroundColor: StyleGuide.colors.backgroundDark,
          shadowColor: 'transparent', // Remove react navigation's default bottom hairline border
        },
        headerTintColor: StyleGuide.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 32,
        },
      }}>
      <ShareStack.Screen
        name="Share"
        component={ShareScreen}
        options={{
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
    </ShareStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        hideStatusBar
        screenOptions={{
          gestureEnabled: true,
        }}
        drawerContentOptions={{
          activeTintColor: StyleGuide.colors.brandDark,
          activeBackgroundColor: StyleGuide.colors.backgroundLight,
          inactiveTintColor: StyleGuide.colors.backgroundLight,

          itemStyle: { marginVertical: 1 },
          style: styles.drawerContainer,
        }}>
        <Drawer.Screen name="Welcome" component={Home} />
        <Drawer.Screen name="Play Race Cards!" component={Play} />
        <Drawer.Screen name="Instructions" component={Instructions} />
        <Drawer.Screen name="Donate" component={Donate} />
        <Drawer.Screen name="Share" component={Share} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: StyleGuide.colors.backgroundDark,
  },
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
