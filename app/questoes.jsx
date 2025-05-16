import { useContext } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { questoesContext } from '../components/contexts/questionsContext'

export default function questoes() {

const {data1, setData1} = useContext(questoesContext)
const {data2, setData2} = useContext(questoesContext)
const {data3, setData3} = useContext(questoesContext)
const {data4, setData4} = useContext(questoesContext)
const {data5, setData5} = useContext(questoesContext)
const {data6, setData6} = useContext(questoesContext)
const {data7, setData7} = useContext(questoesContext)
const {data8, setData8} = useContext(questoesContext)
const {data9, setData9} = useContext(questoesContext)
const {data10, setData10} = useContext(questoesContext)


  return (
    <View style={styles.container}>
      <Text style={styles.indexText}> Na casa em que você vive com sua família, nos cômodos em que a
      luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas
      (led)? </Text>
      <Text>{data1}</Text>
      <TextInput 
        style={styles.inputBox}
        value={data1}
        onChangeText={setData1}
      />

      <Text style={styles.indexText}> Quando você toma banho, você demora mais do que 10 minutos? </Text>
      <Text>{data2}</Text>
      <TextInput 
        style={styles.inputBox}
        value={data2}
        onChangeText={setData2}
      />

      <Text style={styles.indexText}> Você deixa a torneira aberta ao escovar os dentes? </Text>
      <Text>{data3}</Text>
      <TextInput 
        style={styles.inputBox}
        value={data3}
        onChangeText={setData3}
      />

      <Text style={styles.indexText}> Na casa ou prédio em que você vive com sua família, a calçada é
      limpa com vassoura ao invés de água? </Text>
      <Text>{data4}</Text>
      <TextInput 
        style={styles.inputBox}
        value={data4}
        onChangeText={setData4}
      />

      <Text style={styles.indexText}> Você e sua família dão preferência às frutas e verduras da estação?</Text>
      <Text>{data5}</Text>
      <TextInput 
        style={styles.inputBox}
        value={data5}
        onChangeText={setData5}
      />

      <Text style={styles.indexText}> Você e sua família consomem produtos orgânicos? </Text>
      <Text>{data6}</Text>
      <TextInput 
        style={styles.inputBox}
        value={data6}
        onChangeText={setData6}
      />

      <Text style={styles.indexText}> Você e sua família consomem produtos orgânicos? </Text>
      <Text>{data7}</Text>
      <TextInput 
        style={styles.inputBox}
        value={data7}
        onChangeText={setData7}
      />
      
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: '#90ee90', // verde claro
    justifyContent: 'justify',
    alignItems: 'left',
  },
  indexText: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'left',
    color: 'black',
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  destaque: {
    fontSize: 20,
    textAlign: 'center',
  },
  inputBox: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});