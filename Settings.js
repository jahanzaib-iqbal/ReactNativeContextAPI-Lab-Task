import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Settings() {

  // const [text, onChangeText] = useState('Useless Text');
  // const [number, onChangeNumber] = useState('');

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  const onPress = () => {
    // Alert.alert('YES')
    // console.log(text)
    // console.log(number)
    if(!text.length){
        Alert.alert('User Name Cannot be Empty')
    }else if(!number.length){
      Alert.alert('Password Cannot be Empty')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
