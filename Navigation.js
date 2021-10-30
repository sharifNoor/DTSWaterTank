import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import SmartConfigScreen from './src/screens/SmartConfigScreen';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import MainScreen from './src/screens/MainScreen';
import SplashScreen from './src/screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { _setUserInfo} from './src/assets/global'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  AsyncStorage.getItem("userInfo").then(r => {
    _setUserInfo(JSON.parse(r))
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SmartConfigScreen" component={SmartConfigScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;