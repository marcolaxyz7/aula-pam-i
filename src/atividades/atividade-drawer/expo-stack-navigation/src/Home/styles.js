import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',         
        flex: 1, 
        padding: RFValue(10), 
        alignItems: 'center',
    }, 
    titulo: {
        fontSize: 25, 
        color: '#fafafa', 
        fontWeight: 'bold', 
    },
});

export default styles;