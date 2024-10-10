import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen'; 
import PatientInfoScreen from './screens/PatientInfoScreen'; 
import SignupScreen from './screens/SignupScreen'; 
import InfoSurPatient from './screens/InfoSurPatient'; // Import de la nouvelle page

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PatientInfo" component={PatientInfoScreen} />
        <Stack.Screen name="InfoSurPatient" component={InfoSurPatient} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
