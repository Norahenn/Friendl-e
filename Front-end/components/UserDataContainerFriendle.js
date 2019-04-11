import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
  // Text
} from 'react-native';
import {LinearGradient} from 'expo';
import UserDataContent from '../components/UserDataContentFriendle';

export default class SignInScreen extends React.Component {
  render() {
    let category = this.props.title;
    let content = this.props.content;

    return (
      <View style={[{marginVertical: 20}]} >
          <Text style={[styles.title]}>{category}</Text>
          <ScrollView horizontal={true} style={[styles.container]} showsHorizontalScrollIndicator={false}>
            {
              content.map((value, key) => {
                
                return <UserDataContent
                          key={key}
                          title={value}
                        />
              })
            }
            {/*  */}
          </ScrollView>
          <LinearGradient
            style={{position:'absolute',bottom:0, left:0, width:50, height:90, borderRadius: 10}}
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
            pointerEvents={'none'}
            start={[1, 0]} end={[0, 0]}
          />
          <LinearGradient
            style={{position:'absolute',bottom:0, right:0, width:50, height:90, borderRadius: 10}}
            colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 1)']}
            pointerEvents={'none'}
            start={[0, 0]} end={[1, 0]}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 300,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    color: "#9CA5AB",
    marginBottom: 10
  }
});
  
  