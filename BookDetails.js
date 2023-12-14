import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const BookDetails = () => {
    const route = useRoute();
    const book = route.params.book;


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Book Details
            </Text>

            <Image
                style={styles.imageStyle}
                source={{ uri: book.cover_image }}
            />

            <View style={styles.bookData}>
                <Text style={styles.text}>{book.title}</Text>
                <Text style={styles.text}>Author: {book.author}</Text>
                <Text style={styles.text}>Published Year: {book.publication_year}</Text>
                <Text style={styles.text}>Description: {book.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageStyle: {
        width: 200,
        height: 300,
        marginBottom: 10,
        marginTop: 20,
    },
    bookData: {
        width: '80%',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        color: 'orange',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
    },
});

export default BookDetails;
