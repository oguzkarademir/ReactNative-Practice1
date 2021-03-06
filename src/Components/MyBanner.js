import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBanner = (props) => {

  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View>
          <Text style={styles.text}>{props.baslik}</Text>
          <Text>{props.desc}</Text>
        </View>
        {props.isActive ? null : <Text>Aktif degil</Text>}
      </View>
    </View>
  );
};

export default MyBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
