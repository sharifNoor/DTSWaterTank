import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text, Modal,Switch,
  Image, TextInput,
  TouchableOpacity
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Firebase from '../firebase/config'
import database from '@react-native-firebase/database';

import {
  vh, _userInfo,
  vw, _getScreenName,
} from '../assets/global';


export default class MainScreen extends Component {

  state = {
    modalVisible: false,
    waterLevel: 0,
    roofLevel: 0,
    waterInGovtLine: false,
    suctionPumpStatus: false,
    pressurePumpStatus: false,

  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  componentDidMount() {
    var deviceID = '';
    var data = '';
    var userUID = auth().currentUser.uid;
    database().
      ref('users/' + userUID + '/deviceID')
      .on('value', snapshot => {
        deviceID = snapshot.val();
        database().ref('Devices/' + deviceID)
          .on('value', snapshot => {
            data = snapshot.val();
            this.setState({
              waterLevel: data.LowerTank,
              roofLevel: data.UpperTank,
              waterInGovtLine: data.WaterInGovtLine,
            });
            // console.log(data);
            // console.log(deviceID);
          });

      });



    // console.log("DeviceID : "+deviceID);
    // console.log("UID : "+userUID);
    // console.log("Data : "+JSON.stringify(data.UpperTank));
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
          <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
            <Text style={{ color: '#000000', textAlign: 'center' }}>Is water flowing from Govt. Line : </Text>
            <Text style={{ color: '#1E72BD', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold' }}>{this.state.waterInGovtLine == true ? "Yes" : "No"}</Text>
          </View>
          <Text style={{ marginTop: 5, textDecorationLine: 'underline', fontWeight: 'bold', textAlign: 'center' }}>Water Tank Level</Text>
          <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
            <Text style={{ color: '#000000', textAlign: 'center' }}>Ground :  </Text>
            <Text style={{ color: '#1E72BD', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold' }}>{this.state.waterLevel}%</Text>
            <Text style={{ color: '#000000', marginLeft: '25%' }}>Roof :  </Text>
            <Text style={{ color: '#1E72BD', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold' }}>{this.state.roofLevel}%</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: 100, height: 125, borderRadius: 5, backgroundColor: '#FFFFFF', marginLeft: 20, marginTop: 15, shadowOffset: {
                width: 0,
                height: 2,
              }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
            }}>
              {
                this.state.waterLevel <= 20 && this.state.waterLevel > 0
                  ?
                  <View style={{ width: 100, height: 25, backgroundColor: '#FF0000', marginTop: 100 }}>
                  </View>
                  :
                  this.state.waterLevel <= 40 && this.state.waterLevel > 20
                    ?
                    <View style={{ width: 100, height: 50, backgroundColor: '#4BB543', marginTop: 75 }}>
                    </View>
                    :
                    this.state.waterLevel <= 60 && this.state.waterLevel > 40
                      ?
                      <View style={{ width: 100, height: 75, backgroundColor: '#4BB543', marginTop: 50 }}>
                      </View>
                      :
                      this.state.waterLevel <= 80 && this.state.waterLevel > 60
                        ?
                        <View style={{ width: 100, height: 100, backgroundColor: '#4BB543', marginTop: 25 }}>
                        </View>
                        :
                        this.state.waterLevel <= 100 && this.state.waterLevel > 80
                          ?
                          <View style={{ width: 100, height: 125, backgroundColor: '#FFCC00', marginTop: 0 }}>
                          </View>
                          :
                          null}
            </View>
            <View style={{
              width: 100, height: 125, backgroundColor: '#FFFFFF', borderRadius: 5, marginLeft: 90, marginTop: 15, shadowOffset: {
                width: 0,
                height: 2,
              }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
            }}>
              {
                this.state.roofLevel <= 20 && this.state.roofLevel > 0
                  ?
                  <View style={{ width: 100, height: 25, backgroundColor: '#FF0000', marginTop: 100 }}>
                  </View>
                  :
                  this.state.roofLevel <= 40 && this.state.roofLevel > 20
                    ?
                    <View style={{ width: 100, height: 50, backgroundColor: '#4BB543', marginTop: 75 }}>
                    </View>
                    :
                    this.state.roofLevel <= 60 && this.state.roofLevel > 40
                      ?
                      <View style={{ width: 100, height: 75, backgroundColor: '#4BB543', marginTop: 50 }}>
                      </View>
                      :
                      this.state.roofLevel <= 80 && this.state.roofLevel > 60
                        ?
                        <View style={{ width: 100, height: 100, backgroundColor: '#4BB543', marginTop: 25 }}>
                        </View>
                        :
                        this.state.roofLevel <= 100 && this.state.roofLevel > 80
                          ?
                          <View style={{ width: 100, height: 125, backgroundColor: '#FFCC00', marginTop: 0 }}>
                          </View>
                          :
                          null
              }
            </View>
          </View>
          <View style={{
            backgroundColor: '#FFFFFF', paddingBottom: 10, marginTop: 10, borderRadius: 10, width: vw - 20, marginLeft: 10, shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
          }}>
            <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 20 }}>
              <Text style={{ color: '#000000', textAlign: 'center' }}>Pumping Motor :  </Text>
              <Text style={{ color: '#1E72BD', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold' }}>{this.state.pressurePumpStatus == true ? 'On' : 'Off'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={true}
        value={true}
      />
              <TouchableOpacity style={{ height: 40, backgroundColor: '#1E72BD', width: vw / 4, marginLeft: vw / 2 - 110, marginTop: 10, borderRadius: 10 }} onPress={() => { this.props.navigation.navigate("MainScreen") }} >
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 5, textAlign: 'center', marginBottom: 10 }}>On</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ height: 40, backgroundColor: '#f77904', width: vw / 4, marginLeft: vw / 2 - 200, marginTop: 10, borderRadius: 10 }} onPress={() => { this.props.navigation.navigate("MainScreen") }} >
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 5, textAlign: 'center', marginBottom: 10 }}>Off</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#f77904', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold' }}>Press button to change status of Pumping Motor.</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
              <Text style={{ color: '#000000', textAlign: 'center' }}>Pressure Motor :  </Text>
              <Text style={{ color: '#1E72BD', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold' }}>{this.state.suctionPumpStatus == true ? 'On' : 'Off'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ backgroundColor: '#1E72BD', height: 40, width: vw / 4, marginLeft: vw / 2 - 110, marginTop: 10, borderRadius: 10 }} onPress={() => { this.props.navigation.navigate("MainScreen") }} >
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 5, textAlign: 'center', marginBottom: 10 }}>On</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ height: 40, backgroundColor: '#f77904', width: vw / 4, marginLeft: vw / 2 - 200, marginTop: 10, borderRadius: 10 }} >
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 5, textAlign: 'center', marginBottom: 10 }}>Off</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#f77904', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold' }}>Press button to change status of Pressure Motor.</Text>
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
