import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function CalculatorScreen({ navigation }) {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [result, setResult] = useState(0);
  const [calculations, setCalculations] = useState([]);

  const calculation = (operator) => {
    let result = 0;
    switch(operator) {
      case "+":
        result = parseFloat(numberOne) + parseFloat(numberTwo);
        setResult(result);
        break;
      case "-":
        result = parseFloat(numberOne) - parseFloat(numberTwo);
        setResult(result);
        break;
    }
    const calculationText = `${numberOne} ${operator} ${numberTwo} = ${result}`;
    setCalculations([...calculations, {key: String(calculations.length), text: calculationText}]);
    setNumberOne('');
    setNumberTwo('');
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.textInputStyle} onChangeText={text => setNumberOne(text)} value={numberOne} keyboardType="number-pad"></TextInput>
      <TextInput style={styles.textInputStyle} onChangeText={text => setNumberTwo(text)} value={numberTwo} keyboardType="number-pad"></TextInput>
      
      <View style={styles.buttonContainer}>
        <View style={{marginRight: 30}}>
          <Button title="+" onPress={() => calculation("+")}></Button>
        </View>
        <View style={{marginRight: 30}}>
          <Button title="-" onPress={() => calculation("-")}></Button>
        </View>
        <Button title="HISTORY" onPress={() => navigation.navigate('History', {history: calculations})}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30
  }
});