import React from 'react';
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Input from '../components/InputFriendle';
import Button from '../components/ButtonFriendle';
import Avatar from '../components/AvatarFriendle';
import Waves from '../components/Waves';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    return (
      <View style={[styles.flexCenter, styles.flexOne]}>

        <Waves wavesHeight="90%"></Waves>
        <View style={[styles.container, styles.flexCenter]}>
          <Avatar></Avatar>
          <Input width="100" kbType="email-address" placeholder="Email"/>
          <Input placeholder="Password" isSecret={true}/>
          <Input placeholder="Confirm Password" isSecret={true}/>
          <Button title="Sign up" pressMethod={this._signInAsync.bind(this)} style={styles.paddingTwo} />
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}>
            <Text style={styles.blueText}>
              I already have an account
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

