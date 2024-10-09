import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Patient Info" onPress={() => navigation.navigate('PatientInfo')} />
    </View>
  );
};

export default HomeScreen;
