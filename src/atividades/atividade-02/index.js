import { View, Text } from 'react-native';

import styles from './styles';

import poloBranca from '../../../assets/polobranca.jpg';
import poloVermelha from '../../../assets/polovermelha.jpg';
import poloPreta from '../../../assets/polopreta.jpg';
import poloAzul from '../../../assets/poloazul.jpg';


import Card from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>

            <Card 
            titulo={'Polo Branca'}
            descricao={'Camisa Polo Social'}
            valor={'300,00'}
            img={poloBranca}
            />
            <Card 
            titulo={'Polo Preta'}
            descricao={'Camisa Polo Social'}
            valor={'300,00'}
            img={poloPreta}
            />
            <Card 
            titulo={'Polo Vermelha'}
            descricao={'Camisa Polo Social'}
            valor={'200,00'}
            img={poloVermelha}
            />
            <Card 
            titulo={'Polo Azul'}
            descricao={'Camisa Polo Social'}
            valor={'200,00'}
            img={poloAzul}
            />
      
        </View>
    );
}

export default Atividade02;