import {React,useState,useEffect} from 'react';
import { View, Text, FlatList, StyleSheet ,StatusBar,TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [Display_name, setName] = useState("");
  const navigation=useNavigation();
  const LogIn=()=>{
   //signup(email,password,Display_name)
   console.log(password)
navigation.navigate('Dashboard')
  }
  return (
      <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="white"
          onChangeText={setEmail}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={setPassword}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="white"
          onChangeText={setName}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={LogIn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#1f1f1f",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:'white',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'white',
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "orange",
  },
});

export default Home;
