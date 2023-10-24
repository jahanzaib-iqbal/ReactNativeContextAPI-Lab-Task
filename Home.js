import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FA20BSE107 from './FA20BSE107';
const Home = () => {
  const AMEERMOAVIA = FA20BSE107();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bitcoin Price Data</Text>
      <FlatList
        data={AMEERMOAVIA}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.currency}>{item.currency}</Text>
            <Text style={styles.rate}>{item.rate}</Text>
            <Text style={styles.code}>{item.code}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Dark background color
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Text color for the header
  },
  itemContainer: {
    backgroundColor: '#1f1f1f', // Dark gray background for each item
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  currency: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange', // Currency text color
  },
  rate: {
    fontSize: 14,
    color: 'lightgray', // Rate text color
  },
  code: {
    fontSize: 12,
    color: 'gray', // Code text color
  },
});

export default Home;
