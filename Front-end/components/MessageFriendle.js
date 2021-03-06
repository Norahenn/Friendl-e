import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class SignInScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //   };
  //   this.setState(input => (
  //   ))
  // };
  render() {
    let message = this.props.content;
    let sender = this.props.from;

    const styles = StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        borderRadius: 2,
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        shadowColor: "#c4c4c4",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
      },
      containerUser: {
        borderRadius: 12,
        borderBottomRightRadius: 0,
        
      },
      containerFiddle: {
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        backgroundColor: '#ADADAD'
      },
      User: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
      },
      Fiddle: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
      },
      textUser: {
        color: '#6c6c6c'
      },
      textFiddle: {
        color: '#fff',
      }
    });
      
      
    return (
      <View style={[sender == 'User' ? styles.User : styles.Fiddle]}>
        <View style={[styles.container, sender == 'User' ? styles.containerUser : styles.containerFiddle, {alignSelf: 'flex-start'}]}>
          <Text style={[{lineHeight: 25, fontSize: 17}, sender == 'User' ? styles.textUser : styles.textFiddle]}>{message}</Text>
        </View>
      </View>
    );
  }

  
}

