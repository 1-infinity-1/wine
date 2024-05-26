import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProductCard = ({ item, addToCart }) => (
    <View style={styles.productItem}>
        <View style={styles.productContent}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
            <Text style={styles.addButtonLabel}>Add to Bag</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    productItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 10,
        width: width - 20,
        backgroundColor: '#333',
    },
    productContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    productImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    productDescription: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#EC9704',
        marginBottom: 5,
    },
    addButton: {
        alignSelf: 'stretch',
        backgroundColor: '#EC9704',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    addButtonLabel: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ProductCard;
