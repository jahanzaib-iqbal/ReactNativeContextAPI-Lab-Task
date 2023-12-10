import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useContext } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import CustomButton from './CustomButton';
import {AppButton} from "./AppButton";

import { AppContext } from './Context';

export default function Home() {
  // console.log('Top Most Area');

  const {users} = useContext(AppContext);

  const [count, setCount] = useState('');
  const [flag, setFlag] = useState('');
  const [life, setLife] = useState(0);
  const navigation = useNavigation();
  
  // const route = useRoute();
  // const chatwith = route.params.chatwith;

  const [person, setPerson] = useState(global.chatwith);
  
  const setFontBtnPressed = () => {
    // setCount(count+1)
    global.dark = 'black';
    // console.log(global.dark);
    // if (usepostisnotdoneyet){
    //   Alert.alert();
    // }else{
    //   navigation.navigate('Ali');
    // }

    /// 

    // setLife(life+1);
    // setCount(count+1);
  }

  // Atleast 5 to 6 Funtiions call hotay thay
  // Funtion Overriding
  // constructure()
  // componentWillMount()
  // return()
  // componentDidMount() // GET API Call Huee setState()
  // componentDidUpdate() // Update Score
  // componentWillUnMount()

  //iOS
  // init()
  // DidAppear()
  // WillAppear()
  // destructor()

  // Function
  useEffect(()=>{
    console.log('Get Pak vs INDIA Match Score')
    // Get Pak vs INDIA Match Score
  })

  useEffect(()=>{
    console.log('Khaali useEffect')
  },[])

  useEffect(()=>{
    console.log('life useEffect')
  },[life])

  useEffect(()=>{
    console.log('count useEffect')
  },[count])
  
  useEffect(()=>{
    console.log('life and count useEffect')
  },[life, count])
  
  useEffect(()=>{
    // console.log('');
    // Destructor [iPhone main bohat ziada use hota tha]
    // Empty Global variable
    // global.myvar = 0;
    // setUpdate
    return()=>{
      console.log('I am going back from Home Screen')
    }
  },[])

  return (
    <View style={styles.container}>
      {console.log('Return is called')}
      <Text style={{fontSize:40}}> This is HOME Component </Text>
      
      {
        users.map((user)=><Text>{user.title}</Text>)
      }
      
      {/* <CustomButton /> */}
      
      {/* <AppButton
                    btnBgColor={'#2abec7'}
                    btnPadding={10}
                    btnPress={this._LoginFunction}
                    btnTextSize={18}
                    btnTitle={'list'}
                    textColor={'#000'}
                /> */}
      
      <Text style={{fontSize:40}}>
        
         Person Name = {person.title}      
                Person City = {person.city}
         </Text>
      
      <TouchableOpacity style={styles.button} onPress={setFontBtnPressed}>
        <Text style={{color:'white'}}> Set Font </Text>
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
