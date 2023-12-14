import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Home from "./Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import BookDetails from './BookDetails';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MyContextProvider, { MyContext } from './Context';


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
})


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator >

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />


          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="BookDetails"
            component={BookDetails}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </MyContextProvider>
  );
}

