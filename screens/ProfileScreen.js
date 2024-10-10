import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { auth } from './firebaseConfig'; 
import { signOut } from 'firebase/auth'; // Importer la fonction de déconnexion

const ProfileScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login'); // Rediriger vers l'écran de connexion après la déconnexion
    } catch (error) {
      Alert.alert("Erreur", "Erreur lors de la déconnexion. Veuillez réessayer.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Affichage de la photo de profil */}
      <Image
        source={{ uri: auth.currentUser?.photoURL || 'https://via.placeholder.com/150' }} // URL de la photo de profil
        style={styles.profileImage}
      />
      <Text style={styles.title}>Mon Profil</Text>
      <Text style={styles.subtitle}>Informations de l'utilisateur</Text>

      {/* Informations de l'utilisateur */}
      <View style={styles.infoContainer}>
        <Text style={styles.userInfo}>Email : {auth.currentUser?.email}</Text>
        <Text style={styles.userInfo}>Nom : {auth.currentUser?.displayName || 'Non défini'}</Text>
      </View>

      {/* Bouton de déconnexion avec effet d'ombre */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Se déconnecter</Text>
      </TouchableOpacity>

      {/* Pied de page */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9', // Couleur de fond douce
    position: 'relative', // Pour la position de l'ombre du bas
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2C3E50', // Couleur du texte
    textShadowColor: '#BDC3C7',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 28,
    marginVertical: 10,
    color: '#34495E', // Couleur du texte
  },
  infoContainer: {
    backgroundColor: '#FFFFFF', // Arrière-plan blanc pour le conteneur d'infos
    borderRadius: 20, // Coins arrondis
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Ombre
    marginVertical: 20,
    width: '100%', // Prend toute la largeur
    alignItems: 'flex-start', // Alignement à gauche
  },
  userInfo: {
    fontSize: 22,
    marginBottom: 15,
    color: '#2C3E50', // Couleur du texte
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Forme ronde
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#0782F9', // Bordure bleue
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6, // Ombre
  },
  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#E63946',
    borderRadius: 30, // Coins arrondis
    alignItems: 'center',
    elevation: 8, // Ombre
    width: '80%', // Largeur ajustée
    transition: 'background-color 0.3s ease', // Effet de transition
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  footerText: {
    fontSize: 16,
    color: '#BDC3C7',
  },
});

export default ProfileScreen;
