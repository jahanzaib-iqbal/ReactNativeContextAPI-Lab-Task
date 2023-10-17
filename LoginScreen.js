import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  
  const [userId, setId] = useState('');
  const navigation = useNavigation();

  const loginBtnPressed = async () => {
    let users = await AsyncStorage.getItem('users');
    users = JSON.parse(users) || [];
    
    const user = users.find((userObj) => userObj.username === username);
    
    if (user) {
      
      
      navigation.push('Profile',{ userId: user.id });
    } else {
      // Generate a unique ID (you can use a library like uuid for this)
      const uniqueId = generateUniqueId();
      
      // Add the new user with a unique ID
      users.push({
        id: uniqueId,
        username: username,
        password: password,
      });
      await AsyncStorage.setItem('users', JSON.stringify(users));
      users = await AsyncStorage.getItem('users');
      console.log(JSON.parse(users));
      navigation.push('Profile',);
    }
  };

  const generateUniqueId = () => {
    // You can implement your own logic to generate a unique ID here
    // For simplicity, you can use a timestamp as a unique ID
    return new Date().getTime().toString();
  };

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
        value={password}
        placeholder="Password"
      />

      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{ color: 'white' }}>Sign up</Text>
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
