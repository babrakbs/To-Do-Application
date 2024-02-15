import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import CustomText from '../../../Components/Text';
import { colors } from '../../../Constants';
import { styles } from './style';

const Splash = ({ navigation }) => {
    const [showText, setShowText] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowText(false)
            navigation.replace('Welcome');
        }, 3000)
    },[navigation])
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                backgroundColor={colors.primaryColor}/>
            {showText && 
               <CustomText 
               customStyle={styles.splashText}
               value='ToDo Application'/>
            }
        </View>
    )
}
export default Splash