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
import { dbSignUp } from '../firebase/dbSignUp';
import { AddUser } from '../firebase/Users';

import {
  vh,
  vw,

} from '../assets/global';

export default class SignUp extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    deviceID: "",
  }

  SignUpToFirebase() {
    console.log(this.state.email, this.state.password);
    dbSignUp(this.state.email, this.state.password).
      then((res) => {
        console.log('res', res);
        var userUID = auth().currentUser.uid;
        console.log(userUID);
        AddUser(this.state.name, this.state.email, this.state.deviceID, userUID).
          then(() => {
            Alert.alert('Sucess');
            this.props.navigation.navigate("MainScreen");
          }).catch((error) => {
            Alert.alert(error)
          })
      }).
      catch((err) => {
        console.log('Error:', err);
      })
  }


  render() {
    return (



      <View style={{ width: vw, backgroundColor: '#f77904' }}>

        <Text style={{ color: '#FFFFFF', fontSize: 20, marginLeft: vw - 335, marginTop: 10, marginBottom: 50 }}>Sign Up with New Credentials.</Text>



        <View style={{ width: vw, height: vh, backgroundColor: '#FFFFFF', borderRadius: 50 }}>

          <View style={{
            height: 120, width: 120, borderRadius: 60, backgroundColor: '#FFFFFF', marginTop: -50, marginLeft: vw - 260, shadowColor: "#000", shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
          }}>


            <Image style={{ height: 100, width: 100, marginTop: 10, marginLeft: 10 }} source={require('../assets/Logo.png')} />
          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TextInput
              placeholder={'User Name'}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#f77904',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 20,
                height: 40,
              }}
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}

            />
            <TextInput
              placeholder={'Contact Number'}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#f77904',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 15,
                height: 40,
              }}

            />
            <TextInput
              placeholder={'Email Address'}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#f77904',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 10,
                height: 40,
              }}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}

            />
            <TextInput
              placeholder={'Address'}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#f77904',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 10,
                height: 40,
              }}

            />
            <TextInput
              placeholder={'Device ID'}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#f77904',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 10,
                height: 40,
              }}
              onChangeText={text => this.setState({ deviceID: text })}
              value={this.state.deviceID}

            />

            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#f77904',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 10,
                height: 40,
              }}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}

            />
            <TextInput
              placeholder={'Confirm Password'}
              secureTextEntry={true}
              style={{
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#f77904',
                borderStyle: 'solid',
                width: 300,
                paddingHorizontal: 20,
                marginTop: 10,
                height: 40,
              }}

            />
          </View>


          <TouchableOpacity style={{ backgroundColor: '#f77904', width: vw / 2, marginLeft: vw / 2 - 110, marginTop: 15, borderRadius: 10 }}
            onPress={this.SignUpToFirebase.bind(this)} >
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 10, marginLeft: vw - 350, marginBottom: 10 }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, }}>Already Account? </Text>
              <Text style={{ fontSize: 14, color: "#1E72BD", textDecorationLine: 'underline' }} onPress={() => { this.props.navigation.navigate("SignIn") }}>Login</Text>
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
