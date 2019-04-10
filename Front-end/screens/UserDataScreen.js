import React from 'react';
import {
  AsyncStorage,
  View,
  // TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import UserDataContainer from '../components/UserDataContainerFriendle';
// import Waves from '../components/Waves';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Personnal Data',
  };

  render() {
    return (
        
        <ScrollView style={{width: '100%', backgroundColor: '#F3F6F7'}}>
          {/* <Waves wavesHeight="1%"></Waves> */}

          <View style={[styles.container, styles.flexCenter]}>
            <UserDataContainer />

          </View>

        </ScrollView>

    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Bridge');
  };
}
const styles = StyleSheet.create({
  blueText: {
    color: "#94A5B1"
  },
  container: {
    width: "100%",
    // height: 400,
    borderRadius: 6,
    // marginLeft: '20vw'
    paddingLeft: 5,
    paddingRight: 5,
    // paddingTop: 15
    // backgroundColor: "#94A5B1"
  },
  flexCenter: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1
  },
  inputTitle: {
    color: "#94A5B1",
    // jusstifySelf: 
    // textAlign: 'left',
    width: '93%',
    paddingTop: 13,
    fontSize: 17
  }
});
