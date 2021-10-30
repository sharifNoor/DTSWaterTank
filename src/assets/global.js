
import { Dimensions, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const vw = Dimensions.get('window').width
export const vh = Dimensions.get('window').height

export var _userInfo

export function _getScreenName(screen) {


  if (screen.name == 'MainScreen') {
      return 0;
    
  }
    else if (screen.name == 'HomeScreen') {
    return 1;
  
  }

}

export const _drawer = [
  
  {
    name: 'home',
    screen: 'MainScreen',
    login: true,
  },
  {
    name: 'aboutUs',
    screen: 'HomeScreen',
    login: true,
  },
  {
    name: 'myProfile',
    screen: 'MainScreen',
    login: true,
  },
  {
    name: 'logout',
    screen: '',
    login: true,
  },
 
  
];

export function _setUserInfo(data) {
  console.log('GLOBAL', data);
  _userInfo = data;
}

export function _logout(navigation) {
  AsyncStorage.setItem('userInfo', 'null').then((r) => {
    
      _setUserInfo(null);
    
      navigation.popToTop();

      alert('Logged Out');
    
  });
}

export function smallFont() {
  if (Platform.OS == 'ios') {
    return 'Museo-500';
  } else {
    return 'Museo300-Regular';
  }
}
export function mediumFont() {
  if (Platform.OS == 'ios') {
    return 'MuseoSans-500';
  } else {
    return 'MuseoSans-600-Regular';
  }
}
export function qurbanFont() {
  if (Platform.OS == 'ios') {
    return 'Museo-500';
  } else {
    return 'Museo400';
  }
}

export function largeFont() {
  if (Platform.OS == 'ios') {
    return 'Museo-700';
  } else {
    return 'Museo700-Regular';
  }
}

