import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
    const { signOut, user } = useAuth();

    const handleSignOut = () => {
        signOut();
        navigation.navigate('Authorization');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Личный кабинет</Text>
            <Text style={styles.welcomeText}>Добро пожаловать, {user?.username}!</Text>
            <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
                <Text style={styles.signOutButtonText}>Выйти</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#1e1e1e',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 40,
    },
    signOutButton: {
        backgroundColor: '#EC9704',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    signOutButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfileScreen;


