import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements'; 

// Seuils critiques pour l'analyse
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

  // Fonction d'analyse des données
  const handleAnalysis = () => {
    // Simuler les données de la montre
    const fakeWatchData = {
      heartRate: Math.floor(Math.random() * 120) + 60, // Fréquence cardiaque entre 60 et 180
      oxygenLevel: Math.floor(Math.random() * 20) + 80, // Niveau d'oxygène entre 80% et 100%
    };

    setWatchData(fakeWatchData);

    // Initialiser la condition critique
    let criticalCondition = false;

    // Vérifications basées sur l'âge
    if (age && parseInt(age) > ELDERLY_AGE_THRESHOLD) {
      criticalCondition = true;
      Alert.alert("Attention!", "Le patient a plus de 65 ans, vérifiez les conditions médicales.");
    }

    // Vérifications sur le cholestérol
    if (cholesterol && parseInt(cholesterol) > HIGH_CHOLESTEROL_LEVEL) {
      criticalCondition = true;
      Alert.alert("Attention!", "Le niveau de cholestérol est élevé !");
    }

    // Vérifications sur les données de la montre
    if (fakeWatchData.heartRate > CRITICAL_HEART_RATE) {
      criticalCondition = true;
      Alert.alert("Attention!", "Fréquence cardiaque critique détectée !");
    } 
    if (fakeWatchData.oxygenLevel < CRITICAL_OXYGEN_LEVEL) {
      criticalCondition = true;
      Alert.alert("Attention!", "Niveau d'oxygène critique détecté !");
    }

    // Vérifications basées sur le diabète et l'hypertension
    if (diabetes || hypertension) {
      criticalCondition = true;
      Alert.alert("Attention!", "Le patient a des antécédents de diabète ou d'hypertension.");
    }

    setIsCritical(criticalCondition);
  };

  // Fonction pour gérer les situations d'urgence
  const handleEmergency = () => {
    Alert.alert("Urgence!", "Appeler les secours immédiatement !");
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
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Niveau de Cholestérol"
        value={cholesterol}
        onChangeText={setCholesterol}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Méthode de Contribution"
        value={contribution}
        onChangeText={setContribution}
      />

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Diabète:</Text>
        <CheckBox
          checked={diabetes}
          onPress={() => setDiabetes(!diabetes)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Hypertension:</Text>
        <CheckBox
          checked={hypertension}
          onPress={() => setHypertension(!hypertension)}
        />
      </View>

      {/* Bouton d'Analyse */}
      <Button title="Analyser" onPress={handleAnalysis} />

      {/* Affichage des données de la montre si l'analyse a été effectuée */}
      {watchData && (
        <View style={styles.resultContainer}>
          <Text>Fréquence cardiaque: {watchData.heartRate} bpm</Text>
          <Text>Niveau d'oxygène: {watchData.oxygenLevel}%</Text>
        </View>
      )}

      {/* Afficher le bouton d'Urgence si le patient est dans un état critique */}
      {isCritical && (
        <Button title="Urgence" color="red" onPress={handleEmergency} />
      )}
    </View>
  );
};

// Styles pour le composant
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
  resultContainer: {
    marginTop: 20,
  },
});

export default PatientInfoScreen;
