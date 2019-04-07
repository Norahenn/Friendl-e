import React from 'react';
import {
TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class SignInScreen extends React.Component {
  render() {
    let pressMethod = this.props.pressMethod;

    return (
      <View style={[styles.container, styles.paddingTen]}>
        <TouchableOpacity
          style={[styles.bg, styles.paddingTen, styles.rounded]}
          onPress={pressMethod}
        >
            <Text style={styles.whiteTxt}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whiteTxt: {
    color: "#fff"
  },
  bg: {
    backgroundColor: "#C4D3DA"
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