import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import Home from "./Home";
import DashboardScreen from './Dashboard';
import LoginScreen from "./LoginScreen";
import MyChatScreen from './MyChat';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './profile';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator >

    <Stack.Screen 
      name="LoginScreen" 
      component={LoginScreen}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen 
      name="Profile" 
      component={Profile}
      options={{
        headerShown:false
      }}
    />
    
    <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        headerShown:true
      }}
    />

    <Stack.Screen 
      name="Ali" 
      component={MyChatScreen}
      options={{
        headerShown:false
      }}
    />

  <Stack.Screen 
      name="DDD" 
      component={DashboardScreen}
      options={{
        headerShown:false
      }}
    />

    </Stack.Navigator>
  </NavigationContainer>
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
