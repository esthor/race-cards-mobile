// TODO: Add drawer navigation
// TODO: Add instructions as initial route

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DrawerActions,
  useIsFocused,
} from '@react-navigation/native';

import WelcomeScreen from '@@screens/Welcome';
import InstructionsScreen from '@@screens/Instructions';
import DonateScreen from '@@screens/Donate';
import ShareScreen from '@@screens/Share';
import Swipe from '@@screens/Swipe';
import FeedbackScreen from '@@screens/Feedback';
import StyleGuide from '@@utils/styleguide';
import DrawerButton from '@@components/nav/DrawerButton';

// TODO: Extract these helpers
// | Helpers

export function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const Drawer = createDrawerNavigator();

// TODO: Extact all these to their own components in a `nav` folder, and alias it.
const WelcomeStack = createStackNavigator();
const PlayStack = createStackNavigator();
const InstructionsStack = createStackNavigator();
const DonateStack = createStackNavigator();
const ShareStack = createStackNavigator();
const FeedbackStack = createStackNavigator();

const Welcome = ({ navigation }) => {
  return (
    <WelcomeStack.Navigator
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
      <WelcomeStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
    </WelcomeStack.Navigator>
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
const Feedback = ({ navigation }) => {
  return (
    <FeedbackStack.Navigator
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
      <FeedbackStack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
    </FeedbackStack.Navigator>
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
        initialRouteName="Welcome"
        hideStatusBar
        screenOptions={{
          gestureEnabled: true,
        }}
        drawerContentOptions={{
          activeTintColor: StyleGuide.colors.brandPurple,
          activeBackgroundColor: StyleGuide.colors.backgroundLight,
          inactiveTintColor: StyleGuide.colors.backgroundLight,

          itemStyle: { marginVertical: 1 },
          style: styles.drawerContainer,
        }}>
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Play Race Cards!" component={Play} />
        <Drawer.Screen name="Instructions" component={Instructions} />
        <Drawer.Screen name="Donate" component={Donate} />
        <Drawer.Screen name="Share" component={Share} />
        <Drawer.Screen name="Feedback" component={Feedback} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: StyleGuide.colors.backgroundDark,
  },
});

export default App;
