import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image, TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';
import firebase from '../firebase/config';
import { dbSignIn } from '../firebase/dbSignIn';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

import {
  vh,
  vw,

} from '../assets/global';

export default class App extends Component {

  static navigationOptions = {
    headerShown: false,
  };

  state = {
    email: "",
    password: "",
    // uid: "",
  }

  // storeData(value){
  //   AsyncStorage.setItem("@userinfo", JSON.stringify(value))
  //   .then(r => {
  //     console.log(r)
  //     // alert("Your card is saved for later use")
  //     AsyncStorage.getItem("@userinfo").then(r => {
  //         console.log("saved", JSON.parse(r));
  //         // _setCard(JSON.parse(r))
  //     })
  //   }).catch(E => {
  //     alert("Card Details not saved.")
  //     // this.state.loading = false
  //     // this.setState(this.state)
  // })


  //   try {
  //     const jsonValue = JSON.stringify(value)

  //     await AsyncStorage.setItem('@email', jsonValue)
  //     console.log(value)
  //   } catch (e) {
  //     console.log(e)
  //     // saving error
  //   }
  // }



  // getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@email')
  //     if(value !== null) {
  //       console.log(value)
  //       // value previously stored
  //     }
  //   } catch(e) {
  //     console.log(e)
  //     // error reading value
  //   }
  // }


  SignInToFirebase() {
    // console.log(this.state.email, this.state.password);
    dbSignIn(this.state.email, this.state.password).
      then((res) => {
        console.log('res', res);
        // var userUID = auth().currentUser.uid;
        // console.log(userUID);
        this.props.navigation.navigate("MainScreen");
      }).
      catch((err) => {
        console.log('Error:', err);
      });
  }

  render() {
    return (
      <View style={{ width: vw, backgroundColor: '#1E72BD' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 20, marginLeft: vw - 335, marginTop: 10, marginBottom: 50 }}>Sign In with Your Credentials.</Text>
        <View style={{ width: vw, height: vh, backgroundColor: '#FFFFFF', borderRadius: 50 }}>
          <View style={{
            height: 120, width: 120, borderRadius: 60, backgroundColor: '#FFFFFF', marginTop: -50, marginLeft: vw - 260, shadowColor: "#000", shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
          }}>
            <Image style={{ height: 100, width: 100, marginTop: 10, marginLeft: 10 }} source={require('../assets/Logo.png')} />
          </View>
          <View style={{ alignItems: 'center', marginTop: 60 }}>
            <TextInput
              placeholder={'Email Address or Contact Number'}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#1E72BD',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 20,
                height: 40,
              }}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
            />

            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#1E72BD',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 20,
                height: 40,
              }}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, color: "#000000", }} onPress={() => { this.props.navigation.navigate("SignUp") }}>Request for a new password</Text>
            </View>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#1E72BD', width: vw / 2, marginLeft: vw / 2 - 110, marginTop: 25, borderRadius: 10 }} onPress={this.SignInToFirebase.bind(this)} >
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 10, marginLeft: vw - 350, marginBottom: 10 }}>Sign In</Text>
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, }}>No Account? </Text>
              <Text style={{ fontSize: 14, color: "#f77904", textDecorationLine: 'underline' }} onPress={() => { this.props.navigation.navigate("SignUp") }}>Create one</Text>
            </View>
          </View>
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
