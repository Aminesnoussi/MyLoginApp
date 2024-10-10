import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { auth } from './firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importer la fonction d'authentification

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('test@gmail.com');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Tentative de connexion avec', username);
      await signInWithEmailAndPassword(auth, username, password);
      navigation.replace('Home');
    } catch (error) {
      // Vérifiez si l'erreur concerne l'authentification
      if (error.code === 'auth/user-not-found') {
        Alert.alert("Erreur de connexion", "Aucun utilisateur trouvé avec cet email.");
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert("Erreur de connexion", "Mot de passe incorrect.");
      } else {
        Alert.alert("Erreur de connexion", error.message); // Message d'erreur par défaut
      }
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.yellowe.fr/wp-content/uploads/2021/07/iStock-1210162966.jpg' }} // Image de fond en rapport avec la santé
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Connectez-vous</Text>
        <Text style={styles.subtitle}>Accédez à vos informations de santé</Text>
        <TextInput
          style={styles.input}
          placeholder="Email" // Changer le placeholder pour l'email
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
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.footerText}>Pas encore inscrit ? Inscrivez-vous ici</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
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
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footerText: {
    marginTop: 10,
    color: '#0782F9',
  },
  forgotPasswordText: {
    marginTop: 10,
    color: '#0782F9',
    textDecorationLine: 'underline', // Souligner le texte
  },
});

export default LoginScreen;
