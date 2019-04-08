import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  // Text
} from 'react-native';

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputValue : this.props.prefillValue,
    };
    // this.setState(input => (
    // ))
  };
  render() {
    // Make it possible to set the size of the input through a prop
    // PROPS LIST
    /*
    placeholder
    kbType
    */
  // TODO: Add a layer to prevent direct interaction with this.propsin the render template
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
          // To test Child to Parent data
          // onChangeText={(text) => this.props.parentValue(text)} value={this.state.inputValue}
          onChangeText={(text) => this.setState({inputValue: text})} value={this.state.inputValue}
          secureTextEntry={isSecret}
        />
        {/* To test if inputValue is works how it's supposed to */}
        {/* <Text>{this.state.inputValue}</Text> */}
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
  }
});
  
  