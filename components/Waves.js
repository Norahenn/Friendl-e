import React from 'react';
import {
  View,
  Image,
  Stylesheet
} from 'react-native';

export default class SignInScreen extends React.Component {
  render() {
    let wavesHeight = this.props.wavesHeight;
    let style = function(topValue){
      return {
        position: 'absolute',
        top: topValue,
        left: 0,
        width: '100%',
        height: '100%',
      }
    }
    return (
      <View
        style={style(wavesHeight)}
      >
        <Image
          style={{
            flex: 1
          }}
          source={require('../assets/images/png/waves.png')}
        />
      </View>
    );
  }
}