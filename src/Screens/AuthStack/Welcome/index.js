import React from 'react'
import { StatusBar, View } from 'react-native'
import CustomButton from '../../../Components/Button'
import CustomText from '../../../Components/Text'
import { colors } from '../../../Constants'
import { styles } from './style'

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primaryColor} />
      <CustomText
        customStyle={styles.welcomeText}
        value='Remembering task is now easy...' />

      <CustomButton
        onPress={() => navigation.replace('Login')}
        styles={styles.btn}>
        <CustomText
          customStyle={styles.btnText}
          value='Next' />
      </CustomButton>
    </View>
  )
}

export default Welcome