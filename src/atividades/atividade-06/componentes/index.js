import React, {use, useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Index() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 6</Text>
            <View style={styles.entradaImc}>
                <TextInput 
                placeholder='Massa' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)} 
                />
                <TextInput 
                placeholder='Altura' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setAltura(entrada)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
                <Text style={styles.buttonText}> Calcular </Text>
            </TouchableOpacity>
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
            <View>
                if (resultado  18.5) {
                    <Text>
                        Abaixo do peso
                    </Text>
                },
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EEE',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#AAA',
    },
    entradaImc: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        height: 80,
        textAlign:'center',
        width: '50%',
        fontSize: 50,
        marginTop: 24,
        color: 'lightgray',
    },
    button: {
        backgroundColor: '#89FFA5',
    },
    buttonText: {
        alignSelf: 'center',
        padding: 30,
        fontSize: 25,
        color: '#6DC4A4',
        fontWeight: 'bold',
    },
    resultados: {
        alignSelf: 'center',
        color: 'lightgray',
        fontSize: 65,
        padding: 15,
    },

});