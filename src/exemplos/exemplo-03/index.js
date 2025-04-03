import { View, Text, Button, Alert } from 'react-native';

import styles from './styles';

function Exemplo03 () {

    function handleExibeBotao () {
        Alert.alert('Alerta', 'Alguém clicou no botão!')
    }

    const handleExibeBotao2 = () => {
        Alert.alert('Alerta', 'Alguém clicou no botão!' )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <View style={styles.botaoAlert}>
            <Button
                title='Não clique'
                color={'red'}
                onPress={handleExibeBotao2}
            />
            </View>
        </View>
    );
}

export default Exemplo03;