import { View, Text, Image } from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';

import img2 from '../../../assets/polobranca.jpg';


import Mensagem from './mensagens';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>
            <Image source={img} style={styles.imagem} />

            <Mensagem titulo={'Polo Branca'}>
            <Image source={img2} style={styles.imagem} />
                R$ 300
            </Mensagem>
            <Mensagem titulo={'Polo Preta'}>
                R$ 300
            </Mensagem>
            <Mensagem titulo={'Polo Vermelha'}>
                R$ 200
            </Mensagem>
            <Mensagem titulo={'Polo Azul'}>
                R$ 200
            </Mensagem>
        </View>
    );
}

export default Atividade02;