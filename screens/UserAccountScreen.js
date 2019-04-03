import React from 'react';
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import Input from '../components/InputFriendle';
import Waves from '../components/Waves';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };

  render() {
    return (
      <KeyboardAvoidingView style={[styles.flexCenter, styles.flexOne]} behavior="padding" enabled>
        <Waves wavesHeight="1%"></Waves>
        <ScrollView style={{width:'100%'}}>
          
          <Image style={{marginLeft: '60%', marginTop: '15%'}} source={require("../assets/images/avatar.png")}/>
          <View style={[styles.container, styles.flexCenter]}>
            
            <Text style={styles.inputTitle}>Email</Text>
            <Input widthInput={'100%'} kbType="email-address" placeholder="Email"/>

            <Text style={styles.inputTitle}>Username</Text>
            <Input widthInput={'100%'} placeholder="Username"/>

            <Text style={styles.inputTitle}>Previous Password</Text>
            <Input widthInput={'100%'} placeholder="Previous Password" isSecret={true}/>

            <Text style={styles.inputTitle}>New Password</Text>
            <Input widthInput={'100%'} placeholder="New Password" isSecret={true}/>

          </View>
        </ScrollView>

      </KeyboardAvoidingView>
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
    width: 275,
    // height: 400,
    borderRadius: 6,
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
  paddingTwo: {
    padding: 5,
    backgroundColor: "#000"
  },
  inputTitle: {
    color: "#94A5B1",
    // jusstifySelf: 
    // textAlign: 'left',
    // width: 290,
    paddingTop: 10
  }
});
