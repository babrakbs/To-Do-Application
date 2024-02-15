import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import CustomText from '../../../Components/Text'
import { styles } from './style'
import CustomButton from '../../../Components/Button'
import { colors } from '../../../Constants'

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primaryColor}/>
      <CustomText
        customStyle={styles.welcomeText}
        value='Remembering task is now easy...'
      />

      <CustomButton
        onPress={() => navigation.replace('Login')}
        styles={styles.btn}
      >
        <CustomText
          customStyle={styles.btnText}
          value='Next'
        />
      </CustomButton>
    </View>
  )
}

export default Welcome