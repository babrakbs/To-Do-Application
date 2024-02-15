import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, Modal, ActivityIndicator, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { baseUrl, colors } from '../../../Constants'
import axios from 'axios'
import { useSelector } from 'react-redux'
import CustomText from '../../../Components/Text'
import InputField from '../../../Components/InputField'
import CustomButton from '../../../Components/Button'

const ViewTodo = ({ navigation, route }) => {
  const content = route?.params;
  console.log('View Data', content?.data)
  const id = content?.data?.id

  const [title, setTitle] = useState(content?.data?.title)
  const [description, setDescription] = useState(content?.data?.description)
  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(false)
  const token = useSelector((state) => state?.reducer?.token);

  const handleUpdateToDo = async () => {
    if (title.length > 0 && description.length > 0) {
      setLoading(true)
      try {
        const res = await axios.put(`${baseUrl.api}item/${id}`, {
          title: title,
          description: description,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (res?.data?.success) {
          setTitle('');
          setDescription('');
          setTitleError('');
          setDescriptionError('');
          setResponse(res.data);
          // console.log('Response', res.data);
          setLoading(false)
          navigation.goBack()
          // console.log('Token', res.data.user.token);
          // dispatch(setToken(res.data.user.token));
        }

      }
      catch (err) {
        console.error('Login error:', err);
      }
      finally {
        setLoading(false)
      }
    }
    else {
      setDescriptionError('Must Conatin Data')
      setTitleError('Must Conatin Data')
    }

  };


  const handleTitle = async (input) => {
    setTitle(input);
    setTitleError('');
  };

  const validateTitle = () => {
    if (!title) {
      setTitleError('Must contain Title');
    }
    else {
      setTitleError('');
    }
  };

  const handleDescription = (input) => {
    setDescription(input);
    setDescriptionError('');
  };
  const validateDescription = () => {
    if (!description) {
      setDescriptionError('Must contain Description');
    }
    else {
      setDescriptionError('');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primaryColor} />
      <CustomText
        customStyle={styles.head}
        value='Update ToDo' />
      <CustomText
        customStyle={styles.labels}
        value='Enter Title' />
      <InputField
        placeholder='Title'
        value={title}
        keyboardType='default'
        onChangeText={handleTitle}
        onBlur={validateTitle}
      >
      </InputField>
      {titleError &&
        <CustomText
          customStyle={styles.error}
          value={titleError} />
      }

      <CustomText
        customStyle={styles.labels}
        value='Enter Description' />
      <InputField
        multiline={true}
        styles={styles.descpField}
        placeholder='Description'
        value={description}
        keyboardType='default'
        onChangeText={handleDescription}
        onBlur={validateDescription}

      >
      </InputField>
      {descriptionError &&
        <CustomText
          customStyle={styles.error}
          value={descriptionError} />
      }
      <CustomButton onPress={() => handleUpdateToDo()}
        styles={styles.updateBtn}>
        <CustomText
          customStyle={styles.btnUpdateText}
          value='Update' />
      </CustomButton>

      <Modal
        transparent={false}
        animationType="slide"
        visible={loading}
        onRequestClose={() => {
          setLoading(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size={"large"} color={colors.primaryColor} animating={loading} />
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default ViewTodo