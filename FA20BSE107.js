import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const FA20BSE107 = () => {
  const [bitcoinData, setBitcoinData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const storedData = await AsyncStorage.getItem('bitcoinData');
      if (storedData) {
        setBitcoinData(JSON.parse(storedData));
        console.log("data available");
      } else {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            const data = response.data.bpi;
            const dataArray = Object.keys(data).map(key => ({
              currency: data[key].description,
              rate: data[key].rate,
              code: data[key].code,
            }));
            setBitcoinData(dataArray);
            AsyncStorage.setItem('bitcoinData', JSON.stringify(dataArray));
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
    };

    fetchData();
  }, []);

  return bitcoinData;
};

export default FA20BSE107;
