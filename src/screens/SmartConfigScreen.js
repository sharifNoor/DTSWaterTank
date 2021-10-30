import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text, Modal,
  Image, TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Smartconfig from 'react-native-smartconfig-6';
import base64 from 'react-native-base64';

import {
  vh,
  vw, _drawer, _getScreenName,
} from '../assets/global';



export default class SmartConfigScreen extends Component {

  constructor(props) {
    super(props);   
  
    this.state = {
  
      SSID : "",
      BSSID: "",   
      Pwd: "", 
    }
  }

  componentDidMount(){
  this.requestPermission();
  }
  
  requestPermission = async () => {   
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissions Required",
          message: "Access Required to Start",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permissions Granted");
        NetInfo.fetch().then(state => {
          
          this.setState({SSID : state.details.ssid});
          this.setState({BSSID : state.details.bssid});
        //   console.log("SSID", state.details.ssid);
        //   console.log("BSSID", state.details.bssid);
        //   console.log("Is connected?", state.isConnected);        
        });
      } else {
        console.log("Permissions denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  

    ConfigBtn = async () =>{
    Smartconfig.start({
     type: 'esptouch', //or airkiss, now doesn't not effect
     ssid: base64.encode(this.state.SSID), //Dynamics in base64
     bssid: base64.encode(this.state.BSSID), //60:67:20:29:18:c0 in base64"" if not need to filter (don't use null)
     password: base64.encode(this.state.Pwd),
     taskCount: 1,     //Number Esp
     cast: 'broadcast'   // boardcast or multicast
    }).then(function(result){
      //Array of device success do smartconfig
      Alert.alert('Sucess:', result.message);
      this.props.navigation.navigate("MainScreen");
    }).catch(function(error) {
      console.log(error);
     //  console.log('error:', error.message);
      Alert.alert('error:', error.message);
    });
  }

  render() {
    return (
      <View style={{ width: vw, backgroundColor: '#1E72BD' }}>
        <View style={{ width: vw, height: vh, backgroundColor: '#FFFFFF', borderRadius: 50, marginTop: vh - 650 }}>
          <View style={{
            height: 120, width: 120, borderRadius: 60, backgroundColor: '#FFFFFF', marginTop: -50, marginLeft: vw - 260, shadowColor: "#000", shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
          }}>
            <Image style={{ height: 100, width: 100, marginTop: 10, marginLeft: 10 }} source={require('../assets/Logo.png')} />
          </View>
          <View>
              <Text style={styles.text}>
                  SSID: {this.state.SSID}
              </Text>
              <Text style={styles.text}>
                  BSSID: {this.state.BSSID}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>
                    Password: 
                </Text>
                <TextInput 
                placeholder="Password" 
                 style={styles.textInput} 
                 onChangeText={text => this.setState({ Pwd: text })}
                 value={this.state.Pwd}/>
              
              </View>
              <View>
              <TouchableOpacity  style={styles.button}  onPress={()=> this.ConfigBtn()}>
                    <Text style={styles.buttonText}>
                        Configure WiFi
                    </Text>
              </TouchableOpacity>
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
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#f77904',
    borderStyle: 'solid',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#3f2949',
    fontSize: 20,
    marginTop: 10,
    textAlignVertical: 'center',
    margin: 10,
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#f77904',
    borderStyle: 'solid',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    width: vw / 2 + 10,
    margin: 15,
    height: 40,
  },
  button: {
    backgroundColor: '#f77904',
    width: vw / 2, 
    marginLeft: vw / 2 - 10,
    marginTop: 15, 
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 20, 
    marginTop: 10, 
    textAlign: 'center',
    // marginLeft: vw - 350, 
    marginBottom: 15,
  }
});
