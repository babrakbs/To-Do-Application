import React, { useState, useEffect } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { styles } from './style'
import { colors } from '../../../Constants';
import CustomText from '../../../Components/Text';

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
                backgroundColor={colors.primaryColor}
            />
            {showText && 
               <CustomText 
               customStyle={styles.splashText}
               value='ToDo Application'
               />
            }
        </View>
    )
}
export default Splash