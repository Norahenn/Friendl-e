import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
  // Text
} from 'react-native';

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputValue : this.props.prefillValue,
    };
  };
  
  render() {
    let title = this.props.title;

    return (
      <View>
          <Text>{title}</Text>
          <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: "#fff",
    borderRadius: 2
  },
  paddingTen: {
    padding: 10
  },
  paddingFive: {
    padding: 2
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 300,
    height: 125
  }
});
  
  