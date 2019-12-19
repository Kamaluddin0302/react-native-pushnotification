import React, { Component } from 'react'
import {View, Text} from 'react-native'
import PushNotification from "react-native-push-notification"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }


  async componentDidMount(){
    
PushNotification.configure({

  onNotification: function(notification) {
    console.log("NOTIFICATION:", notification);
  },
});
  }
  render() {
    return (
      <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
        <Text>
          Recived your Push N otification
        </Text>
      </View>
    
    )
  }
}
