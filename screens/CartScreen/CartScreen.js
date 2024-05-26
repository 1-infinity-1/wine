import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { CartContext } from '../../context/CartContext';
import CartItemCard from './CartItemCard/CartItemCard';

const CartScreen = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const renderCartItem = ({ item }) => (
        <CartItemCard
            item={item}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    flatListContainer: {
        paddingBottom: 20,
    },
});

export default CartScreen;

