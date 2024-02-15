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

const CreateToDo = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [loading, setLoading] = useState(false)
    const token = useSelector((state) => state?.reducer?.token);

    const handleCreateToDo = async () => {
        if (title.length > 0 && description.length > 0) {
            setLoading(true)
            try {
                const res = await axios.post(`${baseUrl.api}item`, {
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
            <Header
                topTitle='Create New ToDo'
            />
            <Text style={styles.labels}>Enter Title</Text>

            <InputField
                placeholder='Title'
                value={title}
                keyboardType='email-address'
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
            {
                descriptionError &&
                <Text style={styles.error}>{descriptionError}</Text>
            }

            <Button
                onPress={() => handleCreateToDo()}
                style={styles.btnCreate}
                loading={loading}
                title="Create"
            />
        </View >
    )
}
export default CreateToDo