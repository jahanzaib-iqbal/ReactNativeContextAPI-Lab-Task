import React, { useState, useEffect,useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import app from './firebase';
import { MyContext } from './Context';

import { useQuery,gql } from '@apollo/client';
const COUNTRY_QUERY=gql`
  query CountryQuery{
    countries{
      name
    }

  }
`

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const Dashboard = () => {
  const { data, loading, error, customFunction } = useContext(MyContext);
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [newBookYear, setNewBookYear] = useState('');
  const [updateBookId, setUpdateBookId] = useState(null);
  
  const navigation = useNavigation();

// const{data,loading} =useQuery(COUNTRY_QUERY)
useEffect(() => {
   // fetchData();
   
   //const { data, loading, error, customFunction } = useContext(MyContext);
   
  });

  const fetchData = async () => {
    const db = getFirestore(app);
    const booksCollection = collection(db, 'Books');

    try {
      const snapshot = await getDocs(booksCollection);
      const booksData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBooks(booksData);
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  };

  const BookDetails = (book) => {
    navigation.navigate('BookDetails', { book: book });
  };

  const RenderFunction = (item) => {
    const handleUpdate = () => {
      setUpdateBookId(item.id);
    };

    const handleDelete = () => {
      deleteBook(item.id);
    };

    return (
      <TouchableOpacity style={styles.renderData} onPress={() => BookDetails(item)}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
        <Text style={{ fontSize: 10, color: 'lightgray' }}>{item.author}</Text>
        <Text style={{ fontSize: 10, color: 'orange' }}>{item.publication_year}</Text>
        <Ionicons name="chevron-forward-circle-outline" size={25} color="orange" style={styles.nextIcon} />
        <TouchableOpacity onPress={handleUpdate}>
          <Text style={{ fontSize: 10, color: 'green' }}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={{ fontSize: 10, color: 'red' }}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const addBook = async () => {
    const db = getFirestore(app);
    const booksCollection = collection(db, 'Books');

    try {
      const newBook = {
        title: newBookTitle,
        author: newBookAuthor,
        publication_year: parseInt(newBookYear, 10),
      };

      await addDoc(booksCollection, newBook);

      // Clear input fields
      setNewBookTitle('');
      setNewBookAuthor('');
      setNewBookYear('');

      fetchData();
    } catch (error) {
      console.error('Error adding a new book:', error);
    }
  };

  const updateBook = async () => {
    const db = getFirestore(app);
    const bookRef = doc(db, 'Books', updateBookId);

    try {
      const updatedData = {
        title: newBookTitle,
        author: newBookAuthor,
        publication_year: parseInt(newBookYear, 10),
      };

      await updateDoc(bookRef, updatedData);

      // Clear input fields and reset updateBookId
      setNewBookTitle('');
      setNewBookAuthor('');
      setNewBookYear('');
      setUpdateBookId(null);

      fetchData();
    } catch (error) {
      console.error('Error updating the book:', error);
    }
  };

  const deleteBook = async (bookId) => {
    const db = getFirestore(app);
    const bookRef = doc(db, 'Books', bookId);

    try {
      await deleteDoc(bookRef);
      fetchData();
    } catch (error) {
      console.error('Error deleting the book:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novels List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => RenderFunction(item)}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={newBookTitle}
          onChangeText={(text) => setNewBookTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={newBookAuthor}
          onChangeText={(text) => setNewBookAuthor(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Publication Year"
          value={newBookYear}
          onChangeText={(text) => setNewBookYear(text)}
          keyboardType="numeric"
        />
        {updateBookId ? (
          <TouchableOpacity style={styles.addButton} onPress={updateBook}>
            <Text style={{ fontSize: 16, color: 'white' }}>Update Book</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addButton} onPress={addBook}>
            <Text style={{ fontSize: 16, color: 'white' }}>Add Book</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'black',
    flex: 1,
  },
  renderData: {
    backgroundColor: '#1f1f1f',
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginTop: 10,
    position: 'relative',
  },
  title: {
    color: 'orange',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 3,
  },
  nextIcon: {
    position: 'absolute',
    right: 12,
    top: 22,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    color: 'white',
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
