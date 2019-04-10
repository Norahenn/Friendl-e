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

    return (
      <View>
          <Text></Text>
          <ScrollView style={[styles.container, styles.paddingTen]}>
            {/* COMPONENT */}
          </ScrollView>
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
  
  