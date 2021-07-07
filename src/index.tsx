import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Portal } from 'react-native-ui-view';
import { MODULES } from './constants';
import HomePage from './pages/Home';
import IconPage from './pages/Icon';
import ModalPage from './pages/Modal';
import ToastPage from './pages/Toast';
import BadgePage from './pages/Badge';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Portal>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
            gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name={MODULES.HOME} component={HomePage} />
          <Stack.Screen name={MODULES.ICON} component={IconPage} />
          <Stack.Screen name={MODULES.BADGE} component={BadgePage} />
          <Stack.Screen name={MODULES.MODAL} component={ModalPage} />
          <Stack.Screen name={MODULES.TOAST} component={ToastPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Portal>
  );
};

export default App;
