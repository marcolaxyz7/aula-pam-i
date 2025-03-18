import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade01 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.texto}>Aula PAM I, primeiro componente.
            </Text>
            <TouchableOpacity style={styles.botaocondominio} onPress={() => alert('Botão clicado!')}>
            <Text style={styles.botaotexto}>Condominio{"\n"}🏢</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade01;