import axios from 'axios'
import React, { useState } from 'react'
import { ActivityIndicator, Modal, StatusBar, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import CustomButton from '../../../Components/Button'
import Header from '../../../Components/Header'
import InputField from '../../../Components/InputField'
import CustomText from '../../../Components/Text'
import { baseUrl, colors } from '../../../Constants'
import { setToken } from '../../../Redux/reducer'
import { styles } from './style'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const moveToSignUpScreen = () => {
        setEmailError('')
        setPasswordError('')
        setEmail('')
        setPassword('')
        navigation.navigate('Register')
    }

    const handleLogin = async () => {
        try {
            if (!email && !password) {
                console.log('ERROR1')
                setEmailError('Please enter email');
                setPasswordError('Please enter password');
                return;
            }
            if ((email && !emailRegex.test(email)) || (password && !passwordRegex.test(password))) {
                console.log('ERROR2')
                if (email && !emailRegex.test(email)) {
                    setEmailError('Invalid Email Pattern');
                    setPasswordError('')
                }
                else if (password && !passwordRegex.test(password)) {
                    setPasswordError('Must contain 1 Capital letter, 1 special character, and 1 number; Password must be at least 8 characters long');
                    setEmailError('')
                }
                return;
            }
            if (!email) {
                console.log('ERROR3')
                setEmailError('Please enter email');
                return;
            }
            if (!password) {
                console.log('ERROR4')
                setPasswordError('Please enter password');
                return;
            }
            setLoading(true)
            const res = await axios.post(`${baseUrl.api}login`, {
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (res?.data?.success) {
                setEmail('');
                setPassword('');
                setEmailError('');
                setPasswordError('');
                setResponse(res.data);
                setLoading(false)
                dispatch(setToken(res.data.user.token));
            }
            else {
                setEmailError('Something went Wrong')
                setPasswordError('Something went Wrong')
            }
        }
        catch (err) {
            console.error('Login error:', err);
            setLoading(false)
            if (err.response && err.response.status === 401) {
                setEmailError('Might be wrong email')
                setPasswordError('Might be wrong password')
            }
        }
    };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmail = async (input) => {
        setEmail(input);
        setEmailError('');
    };
    const validateEmail = () => {
        if (email) {
            if (!emailRegex.test(email)) {
                setEmailError('Invalid Email Pattern');
            }
            else {
                setEmailError('');
            }
        }
        else {
            setEmailError('');
        }
    };
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,}$/;
    const handlePassword = (input) => {
        setPassword(input);
        setPasswordError('');
    };
    const validatePassword = () => {
        if (password) {
            if (!passwordRegex.test(password)) {
                setPasswordError('Must contain 1 Capital letter, 1 special character, and 1 number');
            }
            else {
                setPasswordError('');
            }
        }
        else {
            setPasswordError('');
        }
    };
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={colors.primaryColor} />
            <Header
                titleTop='To Do Application'
                titleBottom='Login Screen'
                customBottomTitleStyles={styles.customBottomTitleStyles}
            />
            <CustomText
                customStyle={styles.labels}
                value='Enter Email'
            />
            <InputField
                placeholder='Email'
                value={email}
                keyboardType='email-address'
                onChangeText={handleEmail}
                onBlur={validateEmail}
            >
            </InputField>
            {emailError &&
                <CustomText
                    customStyle={styles.error}
                    value={emailError}
                />
            }
            <Text allowFontScaling={false} style={styles.labels}>Enter Password</Text>
            <InputField
                placeholder='Password'
                value={password}
                keyboardType='default'
                secureTextEntry={true}
                onChangeText={handlePassword}
                onBlur={validatePassword}
            >
            </InputField>
            {passwordError &&
                <CustomText
                    customStyle={styles.error}
                    value={passwordError}
                />
            }
            <CustomButton
                onPress={() => handleLogin()}
                styles={styles.btn}>
                <CustomText
                    customStyle={styles.loginText}
                    value='Login'
                />
            </CustomButton>
            <CustomText
                customStyle={styles.alreadyText}>
                Don't have an Account?{" "}
                <CustomText
                    customStyle={styles.signUpText}
                    onPress={() => moveToSignUpScreen()}>
                    Sign up
                </CustomText>
            </CustomText>
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
        </View>
    )
}
export default Login