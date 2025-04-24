import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import React, { useState } from 'react';

function Exemplo05 () {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

function Soma() {
    const conta = parseInt(n1) + parseInt(n2);
    setTotal(conta.toString());
    }

function Subtrair() {
    const conta = parseInt(n1) - parseInt(n2);
    setTotal(conta.toString());
    }

function Multiplicar() {
    const conta = parseInt(n1) * parseInt(n2);
    setTotal(conta.toString());
    }

function Dividir() {
        if (Number(n2) === 0) {
            setTotal('Erro: divisão por zero');
        } else {
            const conta = Number(n1) / Number(n2);
            setTotal(conta.toString());
        }
    }

function Zerar() {
    setTotal  ('');
    setN1  ('');
    setN2  ('');
}

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 5</Text>

            <Text style={styles.texto}>Calculadora Básica</Text>

            <TextInput
              style={styles.input}
              onChangeText={(entrada) => setN1(entrada)}
              value={n1}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
  onChangeText={(entrada) => setN2(entrada)}
  value={n2}
  keyboardType="numeric"
/>

<Text style={styles.resultado}>Total</Text>
<TextInput
  style={styles.input}
  editable={false}
  value={total}
/>

<View style={styles.containerDirecao}>
  <TouchableOpacity style={styles.botao} onPress={Soma}>
    <Text style={styles.botaoTexto}>+</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.botao} onPress={Subtrair}>
    <Text style={styles.botaoTexto}>−</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.botao} onPress={Multiplicar}>
    <Text style={styles.botaoTexto}>×</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.botao} onPress={Dividir}>
    <Text style={styles.botaoTexto}>÷</Text>
  </TouchableOpacity>
</View>

<TouchableOpacity style={styles.zerar} onPress={Zerar}>
  <Text style={styles.zerarTexto}>Zerar</Text>
</TouchableOpacity>


</View>
    );
}

export default Exemplo05;
