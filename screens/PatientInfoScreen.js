import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PatientInfoScreen = () => {
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [contribution, setContribution] = useState('');
  const [diabetes, setDiabetes] = useState(false);
  const [hypertension, setHypertension] = useState(false);

  const handleSubmit = () => {
    // Ici, tu peux ajouter la logique pour traiter les données, comme les envoyer à une API ou les stocker localement.
    console.log({
      sex,
      age,
      cholesterol,
      contribution,
      diabetes,
      hypertension,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Sex"
        value={sex}
        onChangeText={setSex}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Cholesterol Level"
        value={cholesterol}
        onChangeText={setCholesterol}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Contribution Method"
        value={contribution}
        onChangeText={setContribution}
      />

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Diabetes:</Text>
        <CheckBox
          value={diabetes}
          onValueChange={setDiabetes}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Hypertension:</Text>
        <CheckBox
          value={hypertension}
          onValueChange={setHypertension}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});

export default PatientInfoScreen;
