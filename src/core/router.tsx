import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { MODULES } from '../constants';

const PAGE_LIST: { pageName: string; component: React.ComponentType<any> }[] = [];

export const PageContainer = (pageName: string, component: React.ComponentType<any>) => {
  PAGE_LIST.push({
    pageName,
    component,
  });
};

export const Router = () => {
  console.log(11, PAGE_LIST);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={MODULES.HOME}
        screenOptions={{
          header: () => null,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        {PAGE_LIST.map(item => {
          return <Stack.Screen name={item.pageName} component={item.component} key={item.pageName} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
