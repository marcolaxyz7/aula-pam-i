import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: RFPercentage(1),
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e3a8a',
        marginBottom: 20,
    },
    titulo2: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1e40af',
        marginTop: 10,
        marginBottom: 5,
    },
    titulo3: {
        fontSize: 22,
        color: '#334155',
        marginBottom: 30,
        textAlign: 'center',
    },
    txtInput: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#94a3b8',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        fontSize: 16,
        marginBottom: 10,
    },
    botao: {
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default styles;