import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {

    const navigation = useNavigation(); 
    const usuarios = [
        {
            nome: 'José', 
            sobrenome: 'da Silva'
        },  
        {
            nome: 'Maria', 
            sobrenome: 'Santana'
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela inicial do projeto</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
                <Text>Sobre</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Usuario', usuarios[0])}>
                <Text>Configurações do {usuarios[0].nome}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Usuario', usuarios[1])}>
                <Text>Configurações da {usuarios[1].nome}</Text>
            </TouchableOpacity>            

    </View>
    );
}