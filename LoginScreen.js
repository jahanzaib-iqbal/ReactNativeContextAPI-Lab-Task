import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import PostAPIHooks from './APIHooks/PostAPIHooks';
import Profile from './profile';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen() {
  
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');
  const [email, onChangeEmail] = useState('');
  const [email1, onChangeEmail1] = useState('');

  const navigation = useNavigation();
  const {  signup} = PostAPIHooks();

  const loginBtnPressed = async () => {
  await signup(email, passsword, username);
  navigation.push('Profile');
  }

  return (
    <View style={styles.container}>
      <Text> Login Screen! </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="User Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={passsword}
        placeholder="Password"
        // keyboardType="numeric"
      />
<TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        // keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{color:'white'}}>Sign up</Text>
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
    backgroundColor: 'green',
    padding: 10,
  },
});
