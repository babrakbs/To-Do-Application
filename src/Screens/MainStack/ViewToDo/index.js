import axios from 'axios'
import React, { useState } from 'react'
import { Keyboard, StatusBar, View } from 'react-native'
import { useSelector } from 'react-redux'
import Button from '../../../Components/Button'
import Header from '../../../Components/Header'
import InputField from '../../../Components/InputField'
import Text from '../../../Components/Text'
import { baseUrl, colors } from '../../../Constants'
import { styles } from './style'

const ViewTodo = ({ navigation, route }) => {
  const content = route?.params;
  console.log('View Data', content?.data)
  const id = content?.data?.id
  const [title, setTitle] = useState(content?.data?.title)
  const [description, setDescription] = useState(content?.data?.description)
  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
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
          Keyboard.dismiss()
          setTitle('');
          setDescription('');
          setTitleError('');
          setDescriptionError('');
          setLoading(false)
          navigation.goBack()
        }
      }
      catch (err) {
        console.error('Login error:', err);
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
      <Header
        topTitle='Update ToDo'
      />

      <Text style={styles.labels}>Enter Title</Text>
      <InputField
        placeholder='Title'
        value={title}
        keyboardType='default'
        onChangeText={handleTitle}
        onBlur={validateTitle} />
      {titleError &&
        <Text style={styles.error}>{titleError}</Text>
      }
      <Text style={styles.labels}>Enter Description</Text>

      <InputField
        multiline={true}
        style={styles.descpField}
        placeholder='Description'
        value={description}
        keyboardType='default'
        onChangeText={handleDescription}
        onBlur={validateDescription} />
      {descriptionError &&
        <Text style={styles.error}>{descriptionError}</Text>
      }
      <Button
        onPress={() => handleUpdateToDo()}
        style={styles.updateBtn}
        loading={loading}
        title="Update"
      />
    </View>
  )
}
export default ViewTodo