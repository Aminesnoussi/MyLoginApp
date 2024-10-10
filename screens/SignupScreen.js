import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Alert } from 'react-native';
import { auth } from './firebaseConfig'; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { TouchableOpacity } from 'react-native';
import { collection, addDoc } from "firebase/firestore"; // Importez ces 

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
  
      // Ajouter des informations supplémentaires à Firestore
      await addDoc(collection(firestore, "users"), {
        username: username,
        email: user.email,
      });
  
      navigation.navigate('Home'); // Rediriger vers l'écran Home après l'inscription
    } catch (error) {
      Alert.alert("Erreur d'inscription", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <ImageBackground
      source={{ uri: 'https://www.yellowe.fr/wp-content/uploads/2021/07/iStock-1210162966.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Inscription</Text>
        <Text style={styles.subtitle}>Créez votre compte pour accéder à vos informations de santé</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity 
          style={[styles.button, isLoading && styles.buttonDisabled]} 
          onPress={handleSignup} 
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>{isLoading ? 'Chargement...' : "S'inscrire"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerText}>Déjà inscrit ? Connectez-vous ici</Text>
        </TouchableOpacity>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay pour assombrir l'image
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#0782F9',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0', // Couleur pour le bouton désactivé
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footerText: {
    marginTop: 10,
    color: '#0782F9',
  },
});

export default SignupScreen;
