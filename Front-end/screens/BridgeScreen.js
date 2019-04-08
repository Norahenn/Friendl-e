import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  // Button,
  AsyncStorage,
  Image
} from 'react-native';
// import ButtonFriendle from '../components/ButtonFriendle';
// import Avatar from '../components/AvatarFriendle';
import Icon from '../components/IconFriendle';
import TipBridge from '../components/Tips/TipBridge';
import Waves from '../components/Waves';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Waves wavesHeight="40%"></Waves>
        <Image style={[styles.margin]} source={require('../assets/images/avatar.png')}></Image>
        {/* Change Size Icons !! */}
        <View style={[styles.listContainer, {margin: 80}]}>
          {/* <Text>One of your established solution</Text> */}
          <ScrollView>
            <TipBridge title="One of your established solution,One of your established solution"></TipBridge>
            <TipBridge title="One of your established solution"></TipBridge>
            <TipBridge title="One of your established solution"></TipBridge>
            <TipBridge title="One of your established solution"></TipBridge>
          </ScrollView>
        </View>
        <View style={[styles.icons, {position: 'absolute', left: 0, right: 0, bottom: 0}]}>
          <Icon source={require('../assets/images/png/twotone-chat_bubble-24px.png')} pressMethod={this._toChatScreen.bind(this)}></Icon>
          <Icon source={require('../assets/images/png/twotone-sentiment_satisfied_alt-24px.png')} pressMethod={this._toTrackScreen.bind(this)}></Icon>
          <Icon source={require('../assets/images/png/twotone-account_circle-24px.png')} pressMethod={this._toAccountScreen.bind(this)}></Icon>
        </View>
        
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  // To refactore
  _toChatScreen = async () => {
    this.props.navigation.navigate('ChatLog');
  };
  _toTrackScreen = async () => {
    this.props.navigation.navigate('SignUp');
  };
  _toAccountScreen = async () => {
    this.props.navigation.navigate('Account');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  listContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 175,
    width: 300,
    borderWidth: 1,
    borderColor: '#E6E6E6' 
  },
  margin: {
    margin: 50
  }
});
