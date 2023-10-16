import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Profile() {
  
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');

  const navigation = useNavigation();

  const loginBtnPressed = () => {
    

  navigation.navigate('LoginScreen')

  }

  return (
    <View>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

