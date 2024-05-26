import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CartItemCard = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => (
    <View style={styles.cartItem}>
        <View style={styles.cartContent}>
            <Image source={item.image} style={styles.cartImage} />
            <View style={styles.cartDetails}>
                <Text style={styles.cartName}>{item.name}</Text>
                <Text style={styles.cartPrice}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item.id)}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.id)}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
            <Text style={styles.removeButtonText}>Удалить</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 10,
        width: width - 20,
        backgroundColor: '#333',
    },
    cartContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    cartImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    cartDetails: {
        flex: 1,
    },
    cartName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    cartPrice: {
        fontSize: 16,
        color: '#EC9704',
        marginBottom: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#EC9704',
        padding: 10,
        borderRadius: 5,
    },
    quantityButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    quantityText: {
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    removeButton: {
        alignSelf: 'stretch',
        backgroundColor: '#EC9704',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    removeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CartItemCard;
