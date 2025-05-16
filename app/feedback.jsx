import { router } from 'expo-router';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { questoesContext } from '../components/contexts/questionsContext';

export default function feedback() {
    const {
        data1, data2, data3, data4, data5,
        data6, data7, data8, data9, data10
      } = useContext(questoesContext);
    
      const respostas = [
        data1, data2, data3, data4, data5,
        data6, data7, data8, data9, data10
      ];
    
      let sim = 0;
    
      respostas.forEach(resposta => {
        if (resposta === true) sim++;
      });

      let mensagem = '';
      if (sim <= 5) {
        mensagem = `Você respondeu "sim" para apenas ${sim} perguntas. 
    Você ainda não é um consumidor consciente. É importante buscar mais informações sobre como suas atitudes impactam o meio ambiente e começar a mudança o quanto antes!`;
      } else if (sim <= 7) {
        mensagem = `Você respondeu "sim" para ${sim} perguntas. 
    Você já é um consumidor consciente, mas ainda pode fazer muito mais pelo meio ambiente!`;
      } else if (sim <= 9) {
        mensagem = `Parabéns! Você respondeu "sim" para ${sim} perguntas. 
    Você está muito perto de ser um consumidor cidadão exemplar. Continue nesse caminho!`;
      } else if (sim === 10) {
        mensagem = `Excelente! Você respondeu "sim" para todas as 10 perguntas. 
    Você é um consumidor cidadão totalmente consciente dos impactos sociais e ambientais dos seus hábitos de consumo. Parabéns!`;
      }
    return (
        <View style={styles.container}iew>
            <Text style={styles.feedbackText}>Aqui está seu feedback:</Text>
            <Text style={styles.resultado}>{mensagem}</Text>
            <Button
            style={styles.customButton}
                title='Pressione aqui para voltar para o inicio e realizar novas pesquisas'
                onPress={() => router.push('/')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: '#90ee90', // verde claro
    justifyContent: 'center',
    alignItems: 'center',
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
  feedbackText: {
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
  resultado: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
});