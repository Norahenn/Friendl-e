import React from 'react';
import {
  AsyncStorage,
  View,
  // TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput
} from 'react-native';
// import Waves from '../components/Waves';
import Message from '../components/MessageFriendle';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Fiddle',
  };

  constructor(props) {
    super(props);
    this.state = {
      testChildToParentValue: 'parentValue',
      chatLog: [
        [
          {Fiddle: "Hi"},
          {User: "Hi Fiddle"},
          {User: "How are you?"},
          {Fiddle: "Fine. And you, JOHNSON?"}
        ]
        ,
        [
          {Fiddle: "This is another day"},
          {User: "Indeed Fiddle"},
        ],
        [
          {Fiddle: "Once Again, this is another one"},
          {User: "OYEAH"},
        ],
        [
          {Fiddle: "Hi"},
          {User: "Hi Fiddle"},
          {User: "How are you?"},
          {Fiddle: "Fine. And you, JOHNSON?"}
        ],
        [
          {User:"Placeat dolorum ut provident et. Cupiditate sunt velit velit ratione voluptas. Labore necessitatibus non rerum eum reiciendis omnis ut. Ratione explicabo et asperiores. Et minima dignissimos. Incidunt quasi maiores qui quisquam tenetur sit."}
        ]
      ]
    }
  };
    // this.setState(input => (
    // ))
    
  // };


  // Visually retunrs nothing
  generateMessagesLog = (dailyLog) => {
    dailyLog.map((message, index) => {
      return <Text key={index}>{message[Object.keys(message)[0]]}</Text>;;
    })
  };

  // To test Child to Parent data
  // ParentValueMethod = (newValue) => {
  //   this.setState({testChildToParentValue: newValue})
  // };
  
  render() {
    return (
      <KeyboardAvoidingView 
        style={[styles.flexCenter, styles.flexOne, {backgroundColor:'#DFE9EE'}]}
        // TODO: Make it so that there's no visual change of the waves on input pressed
        behavior="padding"
        enabled
        // TODO: Try it on ios to chechk if I need to adjust the value
        keyboardVerticalOffset={80}
        >

        {/* <Waves wavesHeight="0%"></Waves> */}
        {/* To test Child to Parent data */}
        {/* <Text>{this.state.testChildToParentValue}</Text> */}

        <ScrollView style={[styles.container, styles.flexCenter]}>
          {/* {this.generateMessagesLog(this.state.chatLog)} */}
          {
            this.state.chatLog.map((prop, key) => {
              
              return <View key={key}>
                {
                  // Using the function won't return anything, but the map function will, wtf?
                  // this.generateMessagesLog(prop);

                  // Prepare a custom component instaed of the basic Text one, it was just to check the conditional rendering
                  prop.map((message, index) => {
                  if(Object.keys(message)[0] == 'User'){
                    return <Message key={index} content={message[Object.keys(message)[0]]} from={Object.keys(message)[0]} />;
                  } else if(Object.keys(message)[0] == 'Fiddle'){
                    return <Message key={index} content={message[Object.keys(message)[0]]} from={Object.keys(message)[0]} />;
                  }
                })
                }
              </View>;;
            })
          }
        </ScrollView>

      </KeyboardAvoidingView>
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
    // height: 400,
    borderRadius: 6,
    // marginLeft: '20vw'
    paddingLeft: 5,
    paddingRight: 5,
    // paddingTop: 15
    // backgroundColor: "#94A5B1"
  },
  flexCenter: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
