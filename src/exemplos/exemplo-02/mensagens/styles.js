import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.5),
        borderColor: 'red',
        padding: RFPercentage(1.5),
        borderRadius: RFPercentage(1.5),
        width: '90%',
        alignItems: 'center',
    },
});

export default styles;