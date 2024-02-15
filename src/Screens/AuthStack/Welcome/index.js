import React from 'react'
import { StatusBar, View } from 'react-native'
import Button from '../../../Components/Button'
import Text from '../../../Components/Text'
import { colors } from '../../../Constants'
import { styles } from './style'

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primaryColor} />
      <View style={styles.headView}>
        <Text style={styles.head}>TODO</Text>

        <Text style={styles.welcomeText}>Remembering task is now easy...</Text>
      </View>

      <Button
        onPress={() => navigation.replace('Login')}
        style={styles.btn}
        title="Next"
      />
    </View>
  )
}

export default Welcome