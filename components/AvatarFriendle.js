import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class SignInScreen extends React.Component {
  render() {
      // PROPS LIST
      /*
      placeholder
      kbType
      isSecret
      */
    return (
      <View style={[styles.container, styles.paddingTen, styles.flexCenter]}>
        <TouchableOpacity
          style={[styles.bg, styles.paddingTen, styles.rounded]}
          onPress={this.props.pressMethod}
        >
          <Image source={require("../assets/images/avatar.png")}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // bg: {
  //   backgroundColor: "#C4D3DA"
  // },
  flexCenter: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 90,
  },
  paddingTen: {
    padding: 10
  },
  rounded: {
    borderRadius: 6
  }
});