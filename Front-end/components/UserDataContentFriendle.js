import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  };
  
  render() {
    let title = this.props.title;

    return (
      <View style={[{marginTop: 15, marginHorizontal: 25}]}>
          <Text style={[{}, styles.title]}>{title}</Text>
          <TouchableOpacity style={[{}, styles.squareContainer]} onPress={()=> this.setState({isSelected : !this.state.isSelected})}>
            <View
              style={[{},styles.square, this.state.isSelected? styles.filledSquare : styles.emptySquare]}
              
            />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#9CA5AB',
    fontSize: 20
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    paddingLeft: 5,
    paddingVertical: 10
  },
  square: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#9CA5AB'
  },
  emptySquare: {
    backgroundColor: '#fff'
  },
  filledSquare: {
    backgroundColor: '#9CA5AB'
  }
});
  
  