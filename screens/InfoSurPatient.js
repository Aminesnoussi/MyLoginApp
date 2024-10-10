import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Vous pouvez utiliser un composant de radio bouton

const InfoSurPatient = ({ navigation }) => {
  const [answers, setAnswers] = useState({
    overweight: '',
    menopausal: '',
    smoking: '',
  });

  const handleNext = () => {
    if (answers.overweight && answers.menopausal && answers.smoking) {
      navigation.navigate('PatientInfo');
    } else {
      Alert.alert('Veuillez répondre à toutes les questions avant de continuer.');
    }
  };

  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>L'une des affirmations suivantes s'applique-t-elle à vous ?</Text>

      <View style={styles.questionContainer}>
        <Text>Je suis en surpoids ou obèse</Text>
        <RadioButton.Group
          onValueChange={(value) => handleAnswerChange('overweight', value)}
          value={answers.overweight}
        >
          <RadioButton.Item label="Oui" value="oui" />
          <RadioButton.Item label="Non" value="non" />
          <RadioButton.Item label="Je ne sais pas" value="je ne sais pas" />
        </RadioButton.Group>
      </View>

      <View style={styles.questionContainer}>
        <Text>Je suis ménopausé</Text>
        <RadioButton.Group
          onValueChange={(value) => handleAnswerChange('menopausal', value)}
          value={answers.menopausal}
        >
          <RadioButton.Item label="Oui" value="oui" />
          <RadioButton.Item label="Non" value="non" />
          <RadioButton.Item label="Je ne sais pas" value="je ne sais pas" />
        </RadioButton.Group>
      </View>

      <View style={styles.questionContainer}>
        <Text>Je fume des cigarettes depuis au moins 10 ans</Text>
        <RadioButton.Group
          onValueChange={(value) => handleAnswerChange('smoking', value)}
          value={answers.smoking}
        >
          <RadioButton.Item label="Oui" value="oui" />
          <RadioButton.Item label="Non" value="non" />
          <RadioButton.Item label="Je ne sais pas" value="je ne sais pas" />
        </RadioButton.Group>
      </View>

      <Button title="Suivant" onPress={handleNext} />
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
  questionContainer: {
    marginBottom: 20,
  },
});

export default InfoSurPatient;
