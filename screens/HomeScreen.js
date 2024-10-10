import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Modal, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.your-image-url.com/background.jpg' }} // Remplace par une image de fond appropriée
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
      
        <Text style={styles.title}>Bienvenue dans HealthSmart !</Text>

        <Text style={styles.description}>
          HealthSmart est une application de e-santé innovante conçue pour améliorer votre bien-être quotidien grâce à des diagnostics précis basés sur vos symptômes et les relevés biométriques collectés par votre smartwatch.
        </Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Fonctionnalités principales :</Text>
          <Text style={styles.feature}>🔍 Analyse des Symptômes : Recevez des analyses détaillées de vos symptômes.</Text>
          <Text style={styles.feature}>📊 Suivi Biométrique : Synchronisez vos données de smartwatch.</Text>
          <Text style={styles.feature}>📈 Rapports Personnalisés : Obtenez des rapports sur votre état de santé.</Text>
          <Text style={styles.feature}>⚠️ Alertes et Notifications : Soyez informé des signes préoccupants.</Text>
          <Text style={styles.feature}>🗂️ Historique Médical : Conservez vos données de santé en toute sécurité.</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.checkboxText}>📝 J'ai lu et j'accepte les conditions générales d'utilisation</Text>
          </TouchableOpacity>

          <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}
>
  <View style={styles.modalView}>
    <Text style={styles.termsTitle}>Conditions d'utilisation</Text>
    <Text style={styles.terms}>
      Avant d'utiliser le contrôle, veuillez lire attentivement les conditions de service suivantes :
    </Text>
    
    <View style={styles.termsListContainer}>
      <Text style={styles.termsList}>✅ Checkup n'est pas un diagnostic. C'est uniquement pour votre information et ne doit pas être considéré comme un avis médical qualifié.</Text>
      <Text style={styles.termsList}>✅ Checkup n'est pas destiné aux urgences. En cas d'urgence sanitaire, veuillez appeler immédiatement votre numéro d'urgence local.</Text>
      <Text style={styles.termsList}>✅ Vos données sont en sécurité. Les informations que vous fournissez ne seront jamais partagées ou utilisées pour vous identifier.</Text>
    </View>

    <TouchableOpacity
      style={styles.acceptButton}
      onPress={handleAccept}
    >
      <Text style={styles.acceptButtonText}>J'accepte</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => setModalVisible(false)}
    >
      <Text style={styles.closeButtonText}>Fermer</Text>
    </TouchableOpacity>
  </View>
</Modal>


          {accepted && <Text style={styles.acceptedText}>Merci d'avoir accepté les conditions.</Text>}
        </View>

        <Button
          title="Accéder aux Infos Patients"
          onPress={() => navigation.navigate('PatientInfo')}
          disabled={!accepted}
          color={accepted ? "#007BFF" : "#ccc"}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 10,
  },
  checkboxContainer: {
    marginVertical: 20,
  },
  checkboxText: {
    fontSize: 16,
    color: '#2980b9',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  acceptedText: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  termsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d9534f',
    marginBottom: 10,
  },
  terms: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
    textAlign: 'justify',
  },
  acceptButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  acceptButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
