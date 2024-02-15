import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Modal, ActivityIndicator, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { baseUrl, colors } from '../../../Constants'
import axios from 'axios'
import CustomText from '../../../Components/Text'
import InputField from '../../../Components/InputField'
import CustomButton from '../../../Components/Button'
import Header from '../../../Components/Header'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfirmPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState()

    const handleSignUp = async () => {

        try {
            if (email.length > 0 && password.length > 8) {
                const res = await axios.post(`${baseUrl.api}register`, {
                    email: email,
                    password: password,
                    password_confirmation: confrimPassword,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (res?.data?.success) {
                    setResponse(res.data);
                    // console.log('Response', res.data.message);
                    Alert.alert(res.data.message, '', [
                        { text: 'OK', onPress: () => navigation.navigate('Login') }
                    ]);

                }
                else {
                    Alert.alert('Something went wrong !', '', [
                        { text: 'OK'}
                    ]);
                }

            }
            else {
                setEmailError('Please enter email')
                setPassword('Please enter password')
            }
            setEmail('');
            setPassword('');
            setConfirmPassword('')
            setEmailError('');
            setPasswordError('');
            navigation.navigate('Login');
        } catch (err) {
            console.error('Login error:', err);

            if (err.response && err.response.status === 422) {
                setEmailError('This email is already in use');
            }
            else if (err.response.status === 409) {
                // Handle Conflict error
            } else if (err.response.status === 403) {
                // Handle Forbidden error
            } else if (err.response.status === 404) {
                // Handle Not Found error
            } else if (err.response.status === 405) {
                // Handle Method Not Allowed error
            }

        }
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmail = async (input) => {
        setEmail(input);
        setEmailError(false);
    };

    const validateEmail = () => {
        if (!emailRegex.test(email)) {
            setEmailError('Invalid Email Pattern');
        }
    };

    //Password Logic
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[_])(?=.*[^A-Za-z\d\s]).{8,}$/;
    const handlePassword = (input) => {
        setPassword(input);
    };
    const validatePassword = () => {
        if (!passwordRegex.test(password)) {
            setPasswordError('Must contain 1 Capital letter, 1 special character and 1 number having length of 8 characters long.');
        }
        else{
            setPasswordError('')
        }
    };

    //Confirm Password

    const handleConfirmPassword = (input) => {
        setConfirmPassword(input);
        setPasswordsMatch(password === input);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            <StatusBar backgroundColor={colors.primaryColor}/>
            <Header
                titleTop='To Do Application'
                titleBottom='Register Screen'
                customBottomTitleStyles={styles.customBottomTitleStyles}

            />
            <CustomText
                customStyle={styles.labels}
                value='Enter Email'
            />
            <InputField
                placeholder='Email'
                value={email}
                onChangeText={handleEmail}
                keyboardType='email-address'
                onBlur={validateEmail}
            >
            </InputField>
            {emailError &&
                <CustomText
                    customStyle={styles.error}
                    value={emailError}
                />
            }

            <CustomText
                customStyle={styles.labels}
                value='Enter Password'
            />
            <InputField
                placeholder='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={handlePassword}
                onBlur={validatePassword}
            >
            </InputField>
            {passwordError && (
                <CustomText
                    customStyle={styles.error}
                    value='Must contain 1 Capital letter, 1 special character and 1 number having length of 8 characters long.'
                />
            )}

            <CustomText
                customStyle={styles.labels}
                value='Confirm Password'
            />
            <InputField
                placeholder='Confirm Password'
                value={confrimPassword}
                secureTextEntry={true}
                onChangeText={handleConfirmPassword}
            >
            </InputField>
            {!passwordsMatch && (
                <CustomText
                    customStyle={styles.error}
                    value='Passwords do not match'
                />
            )}

            <CustomButton
                onPress={() => handleSignUp()}
            >
                <CustomText
                    customStyle={styles.signUpBtnText}
                    value='Sign Up'
                />
            </CustomButton>
            <CustomText
                customStyle={styles.alreadyText}
            >
                Already have an Account?{" "}
                <CustomText
                    customStyle={styles.signUpText}
                    onPress={() => navigation.goBack()}
                >
                    Sign In
                </CustomText>
            </CustomText>
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
        </ScrollView>
    )
}
export default SignUp