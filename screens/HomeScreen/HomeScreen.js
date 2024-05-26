import React, { useState, useContext } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CartContext } from '../../context/CartContext';
import ProductCard from './ProductCard/ProductCard';
import { categories, products } from './data';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const { addToCart } = useContext(CartContext);

    const renderProducts = ({ item }) => (
        <ProductCard item={item} addToCart={addToCart} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCategory}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                >
                    {categories.map((category, index) => (
                        <Picker.Item key={index} label={category} value={category} />
                    ))}
                </Picker>
            </View>
            <FlatList
                data={products.filter(product => product.category === selectedCategory)}
                renderItem={renderProducts}
                keyExtractor={item => item.id}
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
        paddingHorizontal: 10,
        paddingTop: 20,
        backgroundColor: '#1e1e1e',
    },
    pickerContainer: {
        width: '100%',
        backgroundColor: '#2e2e2e',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    picker: {
        width: '100%',
        color: 'white',
    },
    flatListContainer: {
        paddingTop: 10,
        paddingBottom: 20,
    },
});

export default HomeScreen;



