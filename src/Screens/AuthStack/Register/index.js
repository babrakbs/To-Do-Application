import axios from 'axios'
import React, { useState } from 'react'
import { Alert, StatusBar, View } from 'react-native'
import Button from '../../../Components/Button'
import Header from '../../../Components/Header'
import InputField from '../../../Components/InputField'
import Text from '../../../Components/Text'
import { baseUrl, colors } from '../../../Constants'
import { styles } from './style'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [loading, setLoading] = useState(false)

    const handleSignUp = async () => {
        try {
            if (!email || !password) {
                if (!email) {
                    setEmailError('Please enter email');
                }
                if (!password) {
                    setPasswordError('Please enter password');
                }
                return;
            }

            if (!emailRegex.test(email)) {
                setEmailError('Invalid Email Pattern');
                return;
            }

            if (!passwordRegex.test(password)) {
                setPasswordError('Must contain 1 Capital letter, 1 special character, and 1 number; Password must be at least 8 characters long');
                return;
            }

            setLoading(true);

            const res = await axios.post(`${baseUrl.api}register`, {
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (res?.data?.success) {
                setLoading(false);
                Alert.alert(res.data.message, '', [
                    { text: 'OK', onPress: () => navigation.navigate('Login') }
                ]);
            } else {
                Alert.alert('Something went wrong !', '', [
                    { text: 'OK' }
                ]);
            }
        } catch (err) {
            console.error('Signup error:', err);
            if (err.response && err.response.status === 422) {
                setLoading(false)
                // setEmailError('This email is already in use');
            } else if (err.response.status === 409) {
                setLoading(false)
                // Handle Conflict error
            } else if (err.response.status === 403) {
                setLoading(false)
                // Handle Forbidden error
            } else if (err.response.status === 404) {
                setLoading(false)
                // Handle Not Found error
            } else if (err.response.status === 405) {
                setLoading(false)
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
        else {
            setEmailError('')
        }
    };
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,}$/;
    const handlePassword = (input) => {
        setPassword(input);
    };
    const validatePassword = () => {
        if (!passwordRegex.test(password)) {
            setPasswordError('Must contain 1 Capital letter, 1 special character, and 1 number. Password must be at least 8 characters long');
        }
        else {
            setPasswordError('')
        }
    };
    const handleConfirmPassword = (input) => {
        setConfirmPassword(input);
        setPasswordsMatch(password === input);
    };
    return (
        <View showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            <StatusBar backgroundColor={colors.primaryColor} />
            <Header
                topTitle='TODO' />
            <Text style={styles.labels}>Enter Email</Text>
            <InputField
                placeholder='Email'
                value={email}
                onChangeText={handleEmail}
                keyboardType='email-address'
                onBlur={validateEmail} />
            {emailError &&
                <Text style={styles.error}>{emailError}</Text>

            }
            <Text style={styles.labels}>Enter Password</Text>
            <InputField
                placeholder='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={handlePassword}
                onBlur={validatePassword} />
            {passwordError && (
                <Text style={styles.error}>{passwordError}</Text>
            )}
            <Text style={styles.labels}>Confirm Password</Text>

            <InputField
                placeholder='Confirm Password'
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={handleConfirmPassword} />
            {!passwordsMatch && (
                <Text style={styles.error}>Passwords do not match</Text>
            )}
            <Button
                onPress={() => handleSignUp()}
                style={styles.signUpBtn}
                loading={loading}
                title="Sign Up"
            />
            <Text
                style={styles.alreadyText}>
                Already have an Account?{" "}
                <Text
                    style={styles.signInText}
                    onPress={() => navigation.goBack()}>
                    Sign In
                </Text>
            </Text>
        </View>
    )
}
export default SignUp