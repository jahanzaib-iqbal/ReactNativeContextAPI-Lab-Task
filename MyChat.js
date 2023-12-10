import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,
  FlatList, Image
} from 'react-native';

import CustomButton from './CustomButton'
import { AppContext } from './Context';

export default function MyChatScreen() {

  const {users} = useContext(AppContext);
  const [count, setCount] = useState(0);  
  const [font, setFont] = useState('');  
  const [mode, setMode] = useState('');  

  const navigation = useNavigation();
  const loginBtnPressed = () => {
    navigation.navigate('Home', {})
  }

  const chatBtnPressed = (item) => {
    // console.log(item)
    navigation.navigate('Home');
    global.chatwith=item;
  }

  const setCountFunctionCalled = () => {
    // count++;
    setCount(count+1);
    console.log('count is = ', count)
  }

  useEffect(() => {
    // console.log(global.font);
    console.log('useEffect')
  })

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',
      ()=>{
      
        // Get More Matches Detail

      }
    );
    return unsubscribe;
  },[navigation])

  useEffect(() => {
    // console.log(global.font);
    console.log(' [] useEffect')
  }, [])

  useEffect(()=>{
    console.log('count useEffect')
  },[count])

  // useEffect(()=>{

  // },[flag])

  // useEffect(()=>{

  // },[count, flag])

  // var count = 0;
  
  var myArray = [
    { key: 0, title: 'Pak vs India', msg: '120-0 18 Overs', time: '12:10', img: '', city: 'LHR' },
    { key: 1, title: 'Ali', msg: 'AOA', time: '12:10', img: '', city: 'KH' },
    { key: 2, title: 'Akram', msg: 'AOA', time: '12:10', img: '', city: 'ISLB' },
    { key: 3, title: 'Tahir', msg: 'AOA', time: '12:10', img: '' },
    { key: 4, title: 'Akram', msg: 'AOA', time: '12:10', img: '', city: 'ISLB' },
    { key: 5, title: 'Akram', msg: 'AOA', time: '12:10', img: '', city: 'ISLB' },
    { key: 6, title: 'Akram', msg: 'AOA', time: '12:10', img: '', city: 'ISLB' },
  ]

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.topbutton}
        onPress={setCountFunctionCalled}>

        <Text style={styles.topbuttontext}> User is = {users[0].title} </Text>
      </TouchableOpacity>

      {/* <CustomButton bgcolor={'green'} /> */}

      <FlatList
        data={myArray}
        renderItem={({ item }) =>
        (
          <TouchableOpacity style={ { 
            flex: 1, 
            flexDirection: 'row', 
            height: 80, 
            marginBottom: 30, 
            backgroundColor: mode, 
            alignItems: 'center', 
            justifyContent: 'center' }}
            onPress={()=>chatBtnPressed(item)}>
            <View style={{ flex: 0.25 }}>

              <Image
                style={styles.imagestyle}
                source={require('./Russia.jpeg')}
              />

            </View>
            <View style={{ flex: 0.50 }}>

              <Text style={{fontSize:font}}> {item.title} </Text>
              <Text style={{fontSize:font}}> {item.city} </Text>
              <Text style={{fontSize:font}}> {item.msg} </Text>

            </View>
            <View style={{ flex: 0.25 }}>
              <Text> {item.time} </Text>

            </View>
          </TouchableOpacity>
        )
        }
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{ color: 'white' }}>Go to Next.... </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topbutton:
  {
    marginTop: 40,
    height: 100,
    backgroundColor: 'green'
  },
  topbuttontext:
  {
    fontSize: 40,
    color: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imagestyle: {
    width: 66,
    height: 66, borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red", marginLeft: 10
  },
  // tapbutton: { 
  //   flex: 1, 
  //   flexDirection: 'row', 
  //   height: 80, 
  //   marginBottom: 30, 
  //   backgroundColor: mode, 
  //   alignItems: 'center', 
  //   justifyContent: 'center' },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
});
