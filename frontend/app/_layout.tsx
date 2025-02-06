import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Landing';
import HomeScreen from './Home';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        SplashScreen.hideAsync();  // SplashScreen을 숨기도록 설정
      }, 2000);
    };
    prepare();
  }, []);

  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }} // 헤더 숨기기
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
