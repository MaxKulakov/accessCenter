import React from "react";
import {SafeAreaView, StyleSheet, TextInput} from "react-native";
import {View, Text, Vibration, TouchableOpacity} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const Field = () => {
  const [text, onChangeText] = React.useState("Login");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#D7E1CA',
    height: 70,
    borderRadius: 35,
    margin: 12,
    borderWidth: 2,
    borderColor: '#262A25',
    padding: 10,
  },
});

export default Field;