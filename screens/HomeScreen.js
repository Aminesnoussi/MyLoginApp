import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Modal } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false); // État pour suivre l'acceptation des conditions
  const [modalVisible, setModalVisible] = useState(false); // État pour contrôler l'affichage du modal

  const handleAccept = () => {
    setAccepted(true);
    setModalVisible(false); // Ferme le modal après acceptation
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.yellowe.fr/wp-content/uploads/2021/07/iStock-1210162966.jpg' }} // Image de fond
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bienvenue dans HealthSmart !</Text>
        <Text style={styles.description}>
          HealthSmart est une application de e-santé innovante conçue pour améliorer votre bien-être quotidien grâce à des diagnostics précis basés sur vos symptômes et les relevés biométriques collectés par votre smartwatch.
        </Text>

        <Text style={styles.subtitle}>Fonctionnalités principales :</Text>
        <Text style={styles.feature}>
          1. Analyse des Symptômes : Entrez vos symptômes dans l’application et recevez une analyse détaillée des causes possibles.
        </Text>
        <Text style={styles.feature}>
          2. Suivi Biométrique : Connectez votre smartwatch pour synchroniser automatiquement vos données biométriques.
        </Text>
        <Text style={styles.feature}>
          3. Rapports de Santé Personnalisés : Recevez des rapports pour comprendre votre état de santé.
        </Text>
        <Text style={styles.feature}>
          4. Alertes et Notifications : Soyez informé immédiatement en cas de détection de signes préoccupants.
        </Text>
        <Text style={styles.feature}>
          5. Historique Médical : Conservez un historique complet de vos symptômes et diagnostics.
        </Text>

        <Text style={styles.subtitle}>Avantages :</Text>
        <Text style={styles.advantage}>• Précision et Fiabilité</Text>
        <Text style={styles.advantage}>• Accessibilité</Text>
        <Text style={styles.advantage}>• Prévention Proactive</Text>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setModalVisible(true)} // Ouvre le modal
        >
          <Text style={styles.checkboxText}>J'ai lu et j'accepte les conditions générales d'utilisation</Text>
        </TouchableOpacity>

        {accepted && (
          <Text style={styles.acceptedText}>Merci d'avoir accepté les conditions d'utilisation !</Text>
        )}

        <Button title="Go to Patient Info" onPress={() => navigation.navigate('PatientInfo')} />

        {/* Modal pour afficher les conditions d'utilisation */}
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
              Avant d'utiliser le contrôle, veuillez lire les conditions de service :
            </Text>
            <Text style={styles.termsList}>
              - Checkup n'est pas un diagnostic. C'est seulement pour votre information et non un avis médical qualifié.
            </Text>
            <Text style={styles.termsList}>
              - Checkup n'est pas pour les urgences. Appelez immédiatement votre numéro d'urgence local en cas d'urgence sanitaire.
            </Text>
            <Text style={styles.termsList}>
              - Vos données sont en sécurité. Les informations que vous donnez ne seront pas partagées ou utilisées pour vous identifier.
            </Text>

            <TouchableOpacity
              style={styles.acceptButton}
              onPress={handleAccept} // Accepte les conditions
            >
              <Text style={styles.acceptButtonText}>Accepter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)} // Ferme le modal
            >
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d2d2d',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#4a4a4a',
    marginBottom: 20,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 20,
  },
  feature: {
    fontSize: 14,
    marginVertical: 5,
    color: '#333',
    textAlign: 'justify',
  },
  advantage: {
    fontSize: 14,
    marginVertical: 5,
    color: '#333',
  },
  checkboxContainer: {
    marginVertical: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#007bff',
    textAlign: 'center',
  },
  acceptedText: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de fond du modal
    padding: 20,
  },
  termsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d9534f',
    marginBottom: 10,
  },
  terms: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
    textAlign: 'justify',
  },
  termsList: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 20,
    textAlign: 'justify',
  },
  acceptButton: {
    backgroundColor: '#007bff', // Couleur bleue pour le bouton d'acceptation
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  acceptButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#d9534f', // Couleur rouge pour le bouton de fermeture
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
