import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Initial background color
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params ? route.params.userId : null;

  useEffect(() => {
    loadBackgroundColor();
  }, []);

  const toggleBackgroundColor = () => {
    setBackgroundColor((prevColor) => (prevColor === 'white' ? 'black' : 'white'));
  };

  const loginBtnPressed = () => {
    saveBackgroundColor();
    navigation.navigate('LoginScreen');
  };

  const loadBackgroundColor = async () => {
    
      const savedColor = await AsyncStorage.getItem(`background_color_${userId}`);
      if (savedColor) {
        setBackgroundColor(savedColor);
      }
  };

  const saveBackgroundColor = async () => {
      await AsyncStorage.setItem(`background_color_${userId}`, backgroundColor);
    
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <Text> This is Dashboard Screen</Text>
      <TouchableOpacity style={styles.button} onPress={toggleBackgroundColor}>
        <Text style={{ color: 'white' }}>Toggle Background Color</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
  },
});
