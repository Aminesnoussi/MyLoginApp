import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Picker } from 'react-native';
import { CheckBox } from 'react-native-elements'; 
import { Picker } from '@react-native-picker/picker'; // Importation du Picker

const CRITICAL_HEART_RATE = 100;
const CRITICAL_OXYGEN_LEVEL = 90;
const HIGH_CHOLESTEROL_LEVEL = 240;
const ELDERLY_AGE_THRESHOLD = 65;

const PatientInfoScreen = () => {
  // État des informations du patient
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [contribution, setContribution] = useState('');
  const [diabetes, setDiabetes] = useState(false);
  const [hypertension, setHypertension] = useState(false);
  const [watchData, setWatchData] = useState(null);
  const [isCritical, setIsCritical] = useState(false);

  const handleAnalysis = () => {
    const fakeWatchData = {
      heartRate: Math.floor(Math.random() * 120) + 60,
      oxygenLevel: Math.floor(Math.random() * 20) + 80,
    };

    setWatchData(fakeWatchData);
    let criticalCondition = false;

    if (age && parseInt(age) > ELDERLY_AGE_THRESHOLD) {
      criticalCondition = true;
      Alert.alert("Attention!", "Le patient a plus de 65 ans, vérifiez les conditions médicales.");
    }

    if (cholesterol && parseInt(cholesterol) > HIGH_CHOLESTEROL_LEVEL) {
      criticalCondition = true;
      Alert.alert("Attention!", "Le niveau de cholestérol est élevé !");
    }

    if (fakeWatchData.heartRate > CRITICAL_HEART_RATE) {
      criticalCondition = true;
      Alert.alert("Attention!", "Fréquence cardiaque critique détectée !");
    } 
    if (fakeWatchData.oxygenLevel < CRITICAL_OXYGEN_LEVEL) {
      criticalCondition = true;
      Alert.alert("Attention!", "Niveau d'oxygène critique détecté !");
    }

    if (diabetes || hypertension) {
      criticalCondition = true;
      Alert.alert("Attention!", "Le patient a des antécédents de diabète ou d'hypertension.");
    }

    setIsCritical(criticalCondition);
  };

  const handleEmergency = () => {
    Alert.alert("Urgence!", "Appeler les secours immédiatement !");
  };

  // Fonction pour gérer la saisie d'âge
  const handleAgeChange = (text) => {
    // Permettre uniquement la saisie de chiffres
    const numbersOnly = text.replace(/[^0-9]/g, '');
    setAge(numbersOnly);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informations sur le Patient</Text>

      <TextInput
        style={styles.input}
        placeholder="Sexe"
        value={sex}
        onChangeText={setSex}
      />
      <TextInput
        style={styles.input}
        placeholder="Âge"
        value={age}
        onChangeText={handleAgeChange} // Utiliser la fonction de gestion de l'âge
        keyboardType="numeric"
        accessibilityLabel="Entrez l'âge du patient"
      />
      <Text style={styles.label}>Niveau de Cholestérol</Text>
      <TextInput
        style={styles.input}
        placeholder="Niveau de Cholestérol"
        value={cholesterol}
        onChangeText={setCholesterol}
        keyboardType="numeric"
        accessibilityLabel="Entrez le niveau de cholestérol du patient"
      />
      <Text style={styles.label}>Méthode de Contribution</Text>
      <TextInput
        style={styles.input}
        placeholder="Méthode de Contribution"
        value={contribution}
        onChangeText={setContribution}
        accessibilityLabel="Entrez la méthode de contribution"
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Diabète :</Text>
        <CheckBox
          checked={diabetes}
          onPress={() => setDiabetes(!diabetes)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Hypertension :</Text>
        <CheckBox
          checked={hypertension}
          onPress={() => setHypertension(!hypertension)}
        />
      </View>

      {/* Bouton d'Analyse */}
      <Button title="Analyser" onPress={handleAnalysis} />

      {/* Affichage des données de la montre sous forme de carte */}
      {watchData && (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Données de la Montre</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Fréquence cardiaque: {watchData.heartRate} bpm</Text>
            <Text style={styles.cardText}>Niveau d'oxygène: {watchData.oxygenLevel}%</Text>
          </View>
        </View>
      )}

      {isCritical && (
        <Button title="Urgence" color="red" onPress={handleEmergency} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', // Fond clair
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    paddingTop: 0, 
    textAlign: 'center',
    color: '#333', // Couleur du texte
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  pickerContainer: {
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderColor: '#007BFF',
    

    
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 5, // Ajustement de l'espacement vertical
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderColor: '#007BFF',
    fontSize: 16, // Augmenter la taille de la police
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // Ombre pour Android
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5, // Ajustement de l'espacement vertical
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#333',
  },
  resultContainer: {
    marginTop: 20,
  },
});

export default PatientInfoScreen;
