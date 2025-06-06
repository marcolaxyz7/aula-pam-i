import { StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1, //ocupa 100% da tela
        backgroundColor: '#fff',
        borderRadius: 5, //borda redonda
        padding: 8, //distacia entre o item e a borda
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFPercentage(4),
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        //padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'red',
        borderColor: 'red',
        borderRadius: 20,
    },
    texto: {
        fontSize: RFPercentage(2.2),
    },
    botaoAlert: {
        width: '75%',
        margin: RFPercentage(2),

    },
    valor: {
        color: 'red',
        fontSize: RFPercentage(4),
    },
    botao: {
        backgroundColor: 'red',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(2),
    },
    textBotao: {
        fontSize: RFPercentage(2),
        color: '#fafafa',
    },
});

export default styles;