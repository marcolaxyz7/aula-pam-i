import { View, Text, Image } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/polobranca.jpg';

import img2 from '../../../assets/polovermelha.jpg';

import img3 from '../../../assets/polopreta.jpg';

import img4 from '../../../assets/poloazul.jpg';


import Mensagem from './mensagens';

function Atividade02 () {
    return(
        <><View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>

            <Mensagem titulo={'Polo Branca'}>
                <Image source={img1} style={styles.imagem} />
                R$ 300
            </Mensagem>
            <Mensagem titulo={'Polo Vermelha'}>
                <Image source={img2} style={styles.imagem} />
                R$ 200
            </Mensagem>
            <Mensagem titulo={'Polo Preta'}>
                <Image source={img3} style={styles.imagem} />
                R$ 300
            </Mensagem>
            </View></>
    );
}

export default Atividade02;