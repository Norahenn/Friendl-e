import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class SignInScreen extends React.Component {
  render() {

    let iconSource = this.props.source;
    
    return (
      <View style={[styles.container, styles.paddingTen]}>
        <TouchableOpacity
          style={[styles.bg, styles.padding, styles.rounded, styles.width]}
          onPress={this.props.pressMethod}
        >
          <Image source={iconSource}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  padding: {
    padding: 25
  },
  // width: {
  //   width: 50
  // }
});