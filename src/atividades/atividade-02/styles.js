import { ImageComponent, StyleSheet } from "react-native";

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
        fontSize: RFPercentage(5),
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        //padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        borderColor: 'black',
        borderRadius: 20,
    },
    imagem: {
        height: RFPercentage(15),
        width: RFPercentage(15),
        //width: '40%',
        padding: 8,
        resizeMode: 'contain',
        alignItems: 'flex-start',
    },
});

export default styles;