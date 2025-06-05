import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Usuario({ route }) {

  const navigation = useNavigation();

  const { nome, sobrenome, nomeApp } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nomeApp}</Text>
      <Text style={styles.titulo}>Tela Usuario</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
        <Text>Sobre</Text>
      </TouchableOpacity>

      <Text>Nome do usuário: {nome}</Text>
      <Text>Sobrenome do usuário: {sobrenome}</Text>
    </View>
  );
}