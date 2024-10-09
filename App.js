import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importation de la navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importation du stack

import LoginScreen from './screens/LoginScreen'; // Vérifie que le chemin est correct
import HomeScreen from './screens/HomeScreen'; // Vérifie que le chemin est correct

const Stack = createNativeStackNavigator(); // Création du stack

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
