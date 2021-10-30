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
import { _setUserInfo } from './src/assets/global'
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  vh,
  vw,

} from './src/assets/global';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('./src/assets/home-drawer-white.png')}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function splashScreenStack() {

  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}

        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function SignOutButton() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    alert("Log Out");
}

function logOutStack(){
  SignOutButton();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}

        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function homeScreenStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          headerShown: false,          
        }}
      />
    </Stack.Navigator>
  );
}

function mainScreenStack({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}

        options={{
          title: 'Dashboard', //Set Header Title

          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#000000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function signInScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  );
}

function signUpScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}/>
    </Stack.Navigator>
  );
}

// function forgetScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="SignIn"

//       screenOptions={{

//         headerLeft: () =>
//           <NavigationDrawerStructure
//             navigationProps={navigation}
//           />,
//         headerStyle: {
//           backgroundColor: '#000000', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         }
//       }}>
//       <Stack.Screen
//         name="SignIn"
//         component={SignIn}
//         options={{
//           title: 'Second Page', //Set Header Title

//       }} />
//     </Stack.Navigator>
//   );
// }

function smartConfigScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () =>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#000000', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="SmartConfigScreen"
        component={SmartConfigScreen}
        options={{
          title: 'Setting', //Set Header Title

      }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="SplashScreen"
          options={{ drawerLabel: 'Splash', headerShown: false, drawerItemStyle: { height: 0 } }}
          component={splashScreenStack} />
        <Drawer.Screen
          name="MainScreen"
          options={{ drawerLabel: 'Dashboard', headerShown: false }}
          component={mainScreenStack} />
        <Drawer.Screen
          name="HomeScreen"
          options={{ drawerLabel: 'Splash', headerShown: false, drawerItemStyle: { height: 0 } }}
          component={homeScreenStack} />
        <Drawer.Screen
          name="SmartConfigScreen"
          options={{ drawerLabel: 'Smart Config', headerShown: false }}
          component={smartConfigScreenStack} />
        <Drawer.Screen
          name="SignInScreen"
          options={{ drawerLabel: 'Sign In', headerShown: false, drawerItemStyle: { height: 0 } }}
          component={signInScreenStack} />
        <Drawer.Screen
          name="SignUpScreen"
          options={{ drawerLabel: 'Sign Up', headerShown: false, drawerItemStyle: { height: 0 } }}
          component={signUpScreenStack} />
        <Drawer.Screen
        name="Logout"
          options={{ drawerLabel: 'Log Out', headerShown: false, drawerItemStyle: { marginTop: vh - 200 } }}
          component={logOutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;