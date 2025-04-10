import { use, useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03 () {

    const [numero, setNumero] = useState(0);

    function handelIncrementa() {
        setNumero(numero + 1);
    }

    function handleDecrementa() {
        setNumero(numero - 1);
    }

    function handleZerar() {
        setNumero(0);
    }

    function handleExibeBotao () {
        Alert.alert('Alerta', 'Alguém clicou no botão!')
    }

    const handleExibeBotao2 = () => {
        Alert.alert('Alerta', 'Alguém clicou no botão!' )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade03</Text>
        <View style={styles.containerBotoes2}>
        <View style={styles.containerBotoes}>

            <TouchableOpacity style={styles.botao} onPress={handleDecrementa}>
                <Text style={styles.txtBotao}>-1</Text>
            </TouchableOpacity>   

            <Text style={styles.valor}>{numero}</Text>

            <TouchableOpacity style={styles.botao} onPress={handelIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>

        </View>

            <TouchableOpacity style={styles.botao} onPress={handleZerar}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

export default Atividade03;