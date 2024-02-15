import axios from 'axios'
import React, { useState } from 'react'
import { ActivityIndicator, Modal, StatusBar, View } from 'react-native'
import { useSelector } from 'react-redux'
import CustomButton from '../../../Components/Button'
import InputField from '../../../Components/InputField'
import CustomText from '../../../Components/Text'
import { baseUrl, colors } from '../../../Constants'
import { styles } from './style'

const CreateToDo = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [response, setResponse] = useState()
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
                    setTitle('');
                    setDescription('');
                    setTitleError('');
                    setDescriptionError('');
                    setResponse(res.data);
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
            <CustomText
                customStyle={styles.head}
                value='Create New ToDo' />
            <CustomText
                customStyle={styles.labels}
                value='Enter Title' />

            <InputField
                placeholder='Title'
                value={title}
                keyboardType='email-address'
                onChangeText={handleTitle}
                onBlur={validateTitle}>
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
                onBlur={validateDescription}>
            </InputField>
            {
                descriptionError &&
                <CustomText
                    customStyle={styles.error}
                    value={descriptionError} />
            }
            <CustomButton
                onPress={() => handleCreateToDo()}
                styles={styles.btnCreate}>
                <CustomText
                    customStyle={styles.btnTextCreate}
                    value='Create' />
            </CustomButton>
            <Modal
                transparent={false}
                animationType="slide"
                visible={loading}
                onRequestClose={() => {
                    setLoading(false);
                }}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <ActivityIndicator size={"large"} color={colors.primaryColor} animating={loading} />
                    </View>
                </View>
            </Modal>
        </View >
    )
}
export default CreateToDo