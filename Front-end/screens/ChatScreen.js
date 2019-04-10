import React from 'react';
import {
  AsyncStorage,
  View,
  TouchableOpacity,
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
      // Testing data
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
      ],
      newMessage: ''
    }
  };

  // Visually retunrs nothing
  // generateMessagesLog = (dailyLog) => {
  //   dailyLog.map((message, index) => {
  //     return <Text key={index}>{message[Object.keys(message)[0]]}</Text>;;
  //   })
  // };

  // To test Child to Parent data
  // ParentValueMethod = (newValue) => {
  //   this.setState({testChildToParentValue: newValue})
  // };
  
  render() {
    return (
      <KeyboardAvoidingView 
        style={[styles.flexCenter, styles.flexOne, {backgroundColor:'#F3F6F7'}]}
        behavior="padding"
        enabled
        // TODO: Try it on ios to chechk if I need to adjust the value
        keyboardVerticalOffset={80}
        >

        {/* <Waves wavesHeight="0%"></Waves> */}
        {/* To test Child to Parent data */}
        {/* <Text>{this.state.testChildToParentValue}</Text> */}

        <ScrollView style={[styles.container, styles.flexCenter]}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={()=>{        
            // Changing the duration doesn't do anything at all...
            this.scrollView.scrollToEnd({animated: true, duration: 500});
          }}
        >
          {/* {this.generateMessagesLog(this.state.chatLog)} */}
          {
            this.state.chatLog.map((prop, key) => {
              
              // This could be a component, 'would make the ChatScreen less crowded
              return <View key={key}>
                {
                  // Using the function won't return anything, but the map function will, why?
                  // this.generateMessagesLog(prop);

                  prop.map((message, index) => {
                    // TODO: add a new condition to pass a padding to component as prop
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
        <View style={[{backgroundColor: "#F3F6F7", height:50, flexDirection: 'row' ,justifyContent: 'center', alignItems: 'center'}]}>
        	<View style={[{width: '80%', backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5}, styles.shadowInput]} >
            <TextInput style={[{color: '#6c6c6c',}]} onChangeText={(value) => this.setState({newMessage: value})} value={this.state.newMessage} placeholder="Write a message"/>
            {/* <Text>{this.state.chatLog}</Text> */}
          </View>
          <TouchableOpacity style={[{marginLeft:10}]}
            onPress={() => {
              var chatLog = this.state.chatLog;
              console.log(chatLog);
              chatLog[this.state.chatLog.length-1].push({User : this.state.newMessage});
              this.setState({chatLog})
              // this.setState({ chatLog: [...this.state.myArray, 'new value'] })
              // this.state.chatLog[this.state.chatLog.length-1].push(this.state.newMessage)
            }}>
            {/* TODO: modify png to have no white background */}
            <Image source={require('../assets/images/png/twotone-send-24px.png')}/>
          </TouchableOpacity>
        </View>
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
    // marginBottom: '1.25%',
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
  },
  shadowInput: {
    shadowColor: "#c4c4c4",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  }
});
