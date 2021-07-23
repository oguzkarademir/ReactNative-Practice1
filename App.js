import { ConsoleWriter } from 'istanbul-lib-report';
import React from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';

const App = () => {

  const platform = Platform.OS;
  console.log(Platform)


  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={[styles.text, {color: 'rgb(170,71,126)'}]}>Clarusway</Text>
        <Text style={styles.text}>Components</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold'
  },
});