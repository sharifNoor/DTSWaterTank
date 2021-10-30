import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import NavigationDrawerStructure from '../../App'

import {
  vh,
  vw,

} from '../assets/global';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (

      <View style={{ width: vw, height: vh, backgroundColor: '#FFFFFF' }}>
        <Image style={{ width: 150, height: 150, marginLeft: vw - 300, marginTop: 20 ,}} source={require('../assets/Logo.png')} />
        <Text style={{ color: '#1E72BD', fontSize: 20, marginTop: 10, marginLeft: vw - 350, marginBottom: 10 ,}}>Dynamics Technology Systems.</Text>
     
        <View style={{ width: vw - 20, height: vh - 250 , backgroundColor: '#1E72BD' ,marginLeft : 10 , borderRadius:15 ,shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
           <Text style={{ color: '#FFFFFF', fontSize: 30, marginTop: 10, marginLeft: vw - 290, marginBottom: 10 , textDecorationLine:'underline'}}>Welcome!</Text>
           <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 30, marginLeft: vw - 420, textAlign:'center'}}>Choose any one below to start an application.</Text>
          <TouchableOpacity style={{ backgroundColor: '#FFFFFF', width: vw / 2, marginLeft: vw / 2 - 110, marginTop:  20, borderRadius: 10,shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }} onPress={() => {
              this.props.navigation.navigate("SignInScreen");;
          }}>
            <Text style={{ color: '#1E72BD', fontSize: 20, marginTop: 10, marginLeft: vw - 350, marginBottom: 10 }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#FFFFFF', width: vw / 2, marginLeft: vw / 2 - 110, marginTop: 20, borderRadius: 10,shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }} onPress={() => {
            this.props.navigation.navigate("SignUp")
          }}>
            <Text style={{ color: '#1E72BD', fontSize: 20, marginTop: 10, marginLeft: vw - 350, marginBottom: 10 }}>Sign Up</Text>
          </TouchableOpacity>

        </View>

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
