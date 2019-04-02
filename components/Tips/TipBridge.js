import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class SignInScreen extends React.Component {
  render() {
      let title= this.props.title
    return (
      <View style={[styles.border, styles.fontColor]}>
        <Text style={styles.fontColor}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    padding: 5
  },
  fontColor: {
      color: "#C4C4C4"
  }
});