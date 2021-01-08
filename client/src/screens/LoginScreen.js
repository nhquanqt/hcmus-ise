import React, { Component, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native-web'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { employee, employer } from '../components/Logo'
import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import {withRouter} from 'react-router-dom'
import DataService from '../services/service'

const axios = require('axios').default;


const LoginScreen = (props, { navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const options = [{
            label: <span> EMPLOYEE </span>,
            value: {
                employee: true
            },
            selectedBackgroundColor: "#FFFFFF",

        },
        {
            label: "EMPLOYER",
            value: "employer",
            selectedBackgroundColor: "#FFFFFF"
        }
    ];

    const onChange = (newValue) => {
        console.log(newValue);
    };

    const initialSelectedIndex = options.findIndex(({ value }) => value === "employer");

    const responseGoogle = (response) => {
        console.log(response);
    }



    const responseFacebook = (response) => {
        console.log(response);
    }

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({...email, error: emailError })
            setPassword({...password, error: passwordError })
            return
        }

        const AccountEmail = email.value;
        const Password = password.value;

        const req = {
            AccountEmail: AccountEmail,
            Password: Password
        };

        DataService.login(req)
        .then(data => {
            console.log(data);
            if(data.data.length == 1) {
                props.history.push('/dashboard');
            }
            else {
                // the account is incorrect
            }
        })
        .catch(err => {
            console.log('Error', err.message);
        });
    }

    return ( 
        <Background>
            <BackButton goBack = {
                    () => {
                        props.history.push('/');
                    }
                }
            /> 
            <Logo />
            <Header> Welcome back </Header> 

            <div className = "your-required-wrapper"
                style = {
                    { width: 200, height: 50 }
                } >
            </div>
            <TextInput 
                label = "Email"
                returnKeyType = "next"
                value = { email.value }
                onChangeText = {
                    (text) => setEmail({ value: text, error: '' })
                }
                error = {!!email.error }
                errorText = { email.error }
                autoCapitalize = "none"
                autoCompleteType = "email"
                textContentType = "emailAddress"
                keyboardType = "email-address" />
            <TextInput 
                label = "Password"
                returnKeyType = "done"
                value = { password.value }
                onChangeText = {
                    (text) => setPassword({ value: text, error: '' })
                }
                error = {!!password.error }
                errorText = { password.error }
                secureTextEntry />
            <View 
                style = { styles.forgotPassword } 
                >
                <TouchableOpacity onPress = {
                    // () => navigation.navigate('ForgotPasswordScreen')
                    () => {}
                } >
                    <Text style = { styles.forgot } > Forgot your password ? </Text> 
                </TouchableOpacity >
            </View>
            <Button 
                mode = "contained"
                onPress = { onLoginPressed } >
                Login 
            </Button>  
            {/* <GoogleLogin
                clientId = "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText = "Sign in with Google"
                onSuccess = { responseGoogle }
                onFailure = { responseGoogle }
                cookiePolicy = { 'single_host_origin' }/>    
            <FacebookLogin
                appId = "1088597931155576"
                autoLoad = { false }
                fields = "name,email,picture"
                onClick = { responseFacebook }
                callback = { responseFacebook }/>   */}
            <View style = { styles.row } >
                <Text> Don’ t have an account ? </Text> 
                <TouchableOpacity onPress = {
                    // () => navigation.replace('RegisterScreen')
                    () => {
                        props.history.push('/seeker/signup');
                    }
                } >
                <Text style = { styles.link } > Sign up </Text> 
                </TouchableOpacity > 
            </View>
        </Background >
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

export default withRouter(LoginScreen);