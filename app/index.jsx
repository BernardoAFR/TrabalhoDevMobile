import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.indexText}>BEM VINDO AO CONSUMO APP</Text>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => router.push('/questoes')}
      >
        <Text style={styles.buttonText}> Vamos iniciar a pesquisa sobre seu consumismo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: '#90ee90', // verde claro
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexText: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    elevation: 2,
    shadowColor: '#000', // sombra (iOS)
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  destaque: {
    fontSize: 20,
    textAlign: 'center',
  },
  customButton: {
    backgroundColor: '#006400', // verde escuro
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10, // formato ovalado
    elevation: 5, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
