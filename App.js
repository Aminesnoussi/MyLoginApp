import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native'; // Importez TouchableOpacity ici
import Icon from 'react-native-vector-icons/Ionicons'; 

import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen'; 
import PatientInfoScreen from './screens/PatientInfoScreen'; 
import SignupScreen from './screens/SignupScreen'; 
import InfoSurPatient from './screens/InfoSurPatient'; 
import ProfileScreen from './screens/ProfileScreen'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen}   options={({ navigation }) => ({
            title: 'InfoSurPatient', // Titre de l'écran
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                <Icon name="person-circle" size={30} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          })}/>
        <Stack.Screen name="PatientInfo" component={PatientInfoScreen}  options={({ navigation }) => ({
            title: 'InfoSurPatient', // Titre de l'écran
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                <Icon name="person-circle" size={30} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          })}/>
        <Stack.Screen 
          name="InfoSurPatient" 
          component={InfoSurPatient} 
          options={({ navigation }) => ({
            title: 'InfoSurPatient', // Titre de l'écran
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                <Icon name="person-circle" size={30} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          })}
        /> 
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}  /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
