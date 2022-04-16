import 'react-native-gesture-handler';

import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainPage from './src/screens/MainPage';

const Drawer = createDrawerNavigator();

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator initialRouteName="MainPage">
        <Drawer.Screen name="MainPage" component={MainPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
