import React from 'react';
import { Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
          <Text style={{textAlign:'center', fontSize:30,}}>Story Hub</Text>
          <Text>Read stories here!</Text>
        </View>
      );
    }
  }