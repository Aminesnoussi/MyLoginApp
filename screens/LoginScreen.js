import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Modal } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    navigation.replace('Home'); // Rediriger vers la page Home
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.yellowe.fr/wp-content/uploads/2021/07/iStock-1210162966.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <TouchableOpacity style={styles.menuButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.menuButtonText}>☰ Menu</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Menu</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalItem}>
            <Text style={styles.modalItemText}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalItem}>
            <Text style={styles.modalItemText}>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalItem}>
            <Text style={styles.modalItemText}>Option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.title}>Connectez-vous</Text>
        <Text style={styles.subtitle}>Accédez à vos informations de santé</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Mot de passe oublié ?</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay pour assombrir l'image
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
    padding: 10,
    elevation: 5,
  },
  menuButtonText: {
    fontSize: 20,
    color: '#007bff',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalItem: {
    marginVertical: 10,
  },
  modalItemText: {
    fontSize: 18,
    color: '#007bff',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Arrière-plan clair
    padding: 30,
    borderRadius: 15,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2d2d2d', // Couleur sombre pour le texte
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#4a4a4a', // Couleur pour le sous-titre
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007bff', // Couleur bleue pour le bouton
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
