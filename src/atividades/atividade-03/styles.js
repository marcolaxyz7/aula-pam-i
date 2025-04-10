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
        backgroundColor: 'red',
        fontSize: RFPercentage(4),
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        //padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        borderColor: 'red',
        borderRadius: 20,
    },
    texto: {
        fontSize: RFPercentage(2.2),
    },
    valor: {
        color: 'red',
        fontSize: RFPercentage(4),
    },
    botao: {
        backgroundColor: 'red',
        width: '15%',
        padding: RFPercentage(1),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(2),
        borderRadius: RFPercentage(2),
    },
    textBotao: {
        fontSize: RFPercentage(2),
        color: '#fafafa',
    },
    containerBotoes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: RFPercentage(2),
    },
    containerBotoes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // centraliza horizontalmente
        marginVertical: RFPercentage(2),
    },
    containerBotoes2: {
        alignItems: 'center',
        justifyContent: 'center', // centraliza horizontalmente
        borderWidth: 3,
        borderColor: 'black',
    },
    
});

export default styles;