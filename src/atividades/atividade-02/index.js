import { View, Text } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/polobranca.jpg';

import img2 from '../../../assets/polovermelha.jpg';

import img3 from '../../../assets/polopreta.jpg';

import img4 from '../../../assets/poloazul.jpg';


import Card from './mensagens';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>

            <Card 
            titulo={'Polo Branca'}
            descricao={''}
            valor={''}
            img1={''}
            />
      
        </View>
    );
}

export default Atividade02;