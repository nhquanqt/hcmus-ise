import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
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
import { nameValidator } from '../helpers/nameValidator'
import SwitchSelector from "react-native-switch-selector"


const options = [{
        label: < span > EMPLOYEE < /span>,
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

const RegisterEmployerScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
            setName({...name, error: nameError })
            setEmail({...email, error: emailError })
            setPassword({...password, error: passwordError })
            return
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
        })
    }

    return ( <
        Background >
        <
        BackButton goBack = { navigation.goBack }
        /> <
        Logo / >
        <
        Header > Create Account < /Header > <
        div className = "your-required-wrapper"
        style = {
            { width: 200, height: 50 }
        } >
        <
        SwitchSelector onChange = { onChange }
        options = { options }
        initialSelectedIndex = { initialSelectedIndex }
        backgroundColor = { "#560CCE" }
        textColor = { "#FFFFFF" }
        /> < /
        div >

        <
        TextInput label = "Full Name"
        returnKeyType = "next"
        value = { name.value }
        onChangeText = {
            (text) => setName({ value: text, error: '' })
        }
        error = {!!name.error }
        errorText = { name.error }
        /> <
        TextInput label = "Email"
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
        keyboardType = "email-address" /
        >
        <
        TextInput label = "Password"
        returnKeyType = "done"
        value = { password.value }
        onChangeText = {
            (text) => setPassword({ value: text, error: '' })
        }
        error = {!!password.error }
        errorText = { password.error }
        secureTextEntry /
        >
        <
        TextInput label = "Confirm Password"
        returnKeyType = "done"
        value = { password.value }
        onChangeText = {
            (text) => setPassword({ value: text, error: '' })
        }
        error = {!!password.error }
        errorText = { password.error }
        secureTextEntry /
        >
        <
        Header > Company < /Header> <
        TextInput label = "Company's Name"
        returnKeyType = "next"
        value = { name.value }
        onChangeText = {
            (text) => setName({ value: text, error: '' })
        }
        error = {!!name.error }
        errorText = { name.error }
        /> <
        TextInput label = "Company Industry"
        returnKeyType = "next"
        value = { name.value }
        onChangeText = {
            (text) => setName({ value: text, error: '' })
        }
        error = {!!name.error }
        errorText = { name.error }
        /> <
        TextInput label = "Company Location"
        returnKeyType = "next"
        value = { name.value }
        onChangeText = {
            (text) => setName({ value: text, error: '' })
        }
        error = {!!name.error }
        errorText = { name.error }
        /> <
        Button mode = "contained"
        onPress = { onSignUpPressed }
        style = {
            { marginTop: 24 }
        } >
        Sign Up <
        /Button> <
        View style = { styles.row } >
        <
        Text > Already have an account ? < /Text> <
        TouchableOpacity onPress = {
            () => navigation.replace('LoginScreen')
        } >
        <
        Text style = { styles.link } > Login < /Text> < /
        TouchableOpacity > <
        /View> < /
        Background >
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

export default RegisterEmployerScreen