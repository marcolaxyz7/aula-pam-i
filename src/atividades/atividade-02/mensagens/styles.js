import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import Mensagem from '.';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.5),
        borderColor: 'black',
        padding: RFPercentage(1.5),
        borderRadius: RFPercentage(1.5),
        width: '90%',
        alignItems: 'center',
        marginBottom: RFPercentage(1),
    },
    titulo: {
      fontSize: RFPercentage(3.5),
      fontWeight: 'bold',
      color: 'black',
    },
    mensagem: {
        fontSize: RFPercentage(2),
        color: '#222222',
    },
});

export default styles;