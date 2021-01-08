import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from "react-native";
import Logo from "./Logo";

class SSBar extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 75,
          width:500,
          padding: 20
        }}
      >
        <Text><h2>JOB SEARCH</h2></Text>
        <View style={{ flex: 1 }} />
        <Button
        title="Home"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Logout"
        color="#ff0000"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
        
      </View>
    );
  }
}

  

export default SSBar;