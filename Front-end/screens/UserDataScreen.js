import React from 'react';
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import UserDataContainer from '../components/UserDataContainerFriendle';
// import Waves from '../components/Waves';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Personnal Data',
  };

  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {Hobbies: ['Biking', 'Cooking', 'Eating']},
        {Goals: ['Biking']},
        {Likes: ['Cooking','Biking', 'Cooking', 'Eating','Biking', 'Cooking', 'Eating']},
        {Calms: ['Eating']},
        {Frightens: ['Cooking', 'Eating']}
      ]
    };
  };
  
  render() {
    return (
        <View>
          <TouchableOpacity style={[{}]} onPress={()=>{}}>
            <Image source={require('../assets/images/png/PageButton.png')} 
              style={[{width: '100%'}]}
            />
          </TouchableOpacity>
          <ScrollView style={[{width: '100%', backgroundColor: '#F3F6F7'}, styles.scrollView]} showsVerticalScrollIndicator={false}>
            {/* <Waves wavesHeight="1%"></Waves> */}
  
            <View style={[styles.container, styles.flexCenter]}>
              {
                this.state.datas.map((value, key) => {
                  
                  return <UserDataContainer
                            key={key}
                            content={this.state.datas[key][Object.keys(value)[0]]}
                            title={Object.keys(value)[0]}
                          />
                })
              }
            </View>
  
          </ScrollView>
        </View>

    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Bridge');
  };
}
const styles = StyleSheet.create({
  blueText: {
    color: "#94A5B1"
  },
  container: {
    width: "100%",
    height: 200,
    marginVertical: 400
  },
  scrollView: {
    height: '100%',
  },
  flexCenter: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1
  },
  inputTitle: {
    color: "#94A5B1",
    // jusstifySelf: 
    // textAlign: 'left',
    width: '93%',
    paddingTop: 13,
    fontSize: 17
  }
});
