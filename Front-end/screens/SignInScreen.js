import React from 'react';
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import Input from '../components/InputFriendle';
import Button from '../components/ButtonFriendle';
import Avatar from '../components/AvatarFriendle';
import Waves from '../components/Waves';

export default class SignInScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Sign In',
  // };
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={[styles.flexCenter, styles.flexOne]}>

        <Waves wavesHeight="90%"></Waves>
        <View style={[styles.container, styles.flexCenter]}>
          <Avatar></Avatar>
          <Input widthInput={250} kbType="email-address" placeholder="Email"/>
          <Input widthInput={250} placeholder="Password" isSecret={true}/>
          <Button title="Sign in" pressMethod={this._signInAsync.bind(this)} style={styles.paddingTwo} />
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
            <Text style={styles.blueText}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

      </View>
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
    height: 400,
    borderRadius: 6,
    backgroundColor: '#DFE9EE',
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
  }
});

