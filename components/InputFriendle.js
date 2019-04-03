import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

export default class SignInScreen extends React.Component {
  render() {
    // Make it possible to set the size of the input through a prop
    // PROPS LIST
    /*
    placeholder
    kbType
    isSecret
    */
   let widthValue = this.props.widthInput;
   let widthInput = function(widthValue){
     return {
       width: widthValue
     }
   }
   let isSecret = 
    this.props.isSecret !== undefined
      ? this.props.isSecret
      : false

    return (
      <View style={[widthInput(widthValue), styles.paddingTen]}>
        <TextInput 
          style={[styles.bgWhite, styles.paddingFive]} 
          placeholder={this.props.placeholder}
          keyboardType={this.props.kbType}
          onPress={this.props.pressMethod}
          secureTextEntry={isSecret}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: "#fff",
    borderRadius: 2
  },
  container: {
    width: 250,
  },
  paddingTen: {
    padding: 10
  },
  paddingFive: {
    padding: 2
  }
});
  
  