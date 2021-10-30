import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  BackHandler
} from 'react-native';

import {
  vh,
  vw,
} from '../assets/global';

export default class SplashScreen extends Component {
  componentDidMount(){
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
      this.props.navigation.navigate("HomeScreen");
    }, 3000);
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // works best when the goBack is async
      return true;
    });
  }

  render() {
    return (
      <View style={{width: vw, height: vh}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../assets/splash.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 100,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
