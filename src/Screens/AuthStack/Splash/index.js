import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import Text from '../../../Components/Text';
import { colors } from '../../../Constants';
import { styles } from './style';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000)
    }, [navigation])
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                backgroundColor={colors.primaryColor} />
            <Text
                style={styles.splashText}>
                ToDo Application
            </Text>

        </View>
    )
}
export default Splash