import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import AuthScreen from './screens/AuthScreen';
import ProfileScreen from './screens/ProfileScreen';

import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </CartProvider>
        </AuthProvider>
    );
}

function MainNavigator() {
    const { isAuthenticated } = useAuth();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Cart') {
                        iconName = 'cart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                    } else if (route.name === 'Authorization') {
                        iconName = 'log-in-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#EC9704',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#8f0419',
                tabBarInactiveBackgroundColor: '#8f0419',
                headerStyle: {
                    backgroundColor: '#8f0419',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: '#8f0419',
                },
            })}
        >
            {isAuthenticated ? (
                <>
                    <Tab.Screen name="Catalog" component={HomeScreen} />
                    <Tab.Screen name="Cart" component={CartScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </>
            ) : (
                <Tab.Screen name="Authorization" component={AuthScreen} />
            )}
        </Tab.Navigator>
    );
}

export default App;

