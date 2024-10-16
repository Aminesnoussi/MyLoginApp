import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen'; 
import PatientInfoScreen from './screens/PatientInfoScreen'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PatientInfo" component={PatientInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
