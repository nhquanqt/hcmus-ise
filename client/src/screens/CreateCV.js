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
import { nameValidator } from '../helpers/nameValidator'
import {Button as Button1} from 'react-native'
// import SwitchSelector from "react-native-switch-selector"
// import { StackActions } from '@react-navigation/native'

// const pushAction = StackActions.push('RegisterEmployerScreen');
// const popAction = StackActions.pop('RegisterEmployerScreen');

import {withRouter} from 'react-router-dom';

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

//const initialSelectedIndex = options.findIndex(({ value }) => value === "employer");

const Createcv = (props, { navigation }) => {
    const [firstname, setFirstName] = useState({ value: '', error: '' })
    const [lastname, setLastName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [phonenum, setPhoneNum] = useState({ value: '', error: '' })
    const [gender, setGender] = useState({ value: '', error: '' })
    const [dob, setDob] = useState({ value: '', error: '' })
    const [address, setAddress] = useState({ value: '', error: '' })
    const [country, setCountry] = useState({ value: '', error: '' })

    const onSavePressed = () => {
        const firstnameError = nameValidator(firstname.value)
        const lastnameError = nameValidator(lastname.value)
        const phonenumError = nameValidator(phonenum.value)
        const genderError = nameValidator(gender.value)
        const emailError = emailValidator(email.value)
        if (emailError || firstnameError||lastnameError||phonenumError||genderError) {
            alert("Something went wrong please try again!");
            setFirstName({...firstname, error: firstnameError });
            setLastName({...lastname, error: firstnameError });
            setPhoneNum({...phonenum, error: firstnameError });
            setGender({...gender, error: firstnameError });
            setEmail({...email, error: emailError });
            return;
        }
        alert("successfully completed!");
    }
    const onLogoutPressed=()=>{props.history.push('/login');}

    const onProfilePressed=()=>{props.history.push('/profile');}

    return ( 
        <Background>
            <View
                style={{
                flexDirection: "row",
                height: 75,
                width:1000,
                padding: 20,
                borderBottomColor: '#000000',
                borderBottomWidth: 1,
                borderTopColor:'#000000',
                borderTopWidth: 1,
                borderRightColor:'#000000',
                borderRightWidth: 1,
                borderLeftColor:'#000000',
                borderLeftWidth: 1,
                backgroundColor:"#BCF1ED"
                }} >
            <h2>JOB SEARCH</h2>
            <View style={{ flex: 1 }} />
            <Button1
                title="Home"
                onPress={onLogoutPressed}
            />
            <Button1
                title="Profile"
                color="#00ff00"
                onPress={onProfilePressed}
            />
            <Button1
                title="Logout"
                color="#ff0000"
                onPress={onLogoutPressed} />
            </View>
            
            <Header> User's Profile </Header> 
            <View style = { styles.row } >
            <View style = { styles.col } >
            <b>First Name (*)</b>
            <TextInput 
                returnKeyType = "next"
                value = { firstname.value }
                onChangeText = {
                    (text) => setFirstName({ value: text, error: '' })
                }
                error = {!!firstname.error }
                errorText = { firstname.error }
                />
            <b>Email (*)</b>
            <TextInput 
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
                keyboardType = "email-address"
                />
            <b>Gender (*)</b>
            <TextInput 
                returnKeyType = "done"
                value = { gender.value }
                onChangeText = {
                    (text) => setGender({ value: text, error: '' })
                }
                error = {!!gender.error }
                errorText = { gender.error }
                />
            <b>Address</b>
            <TextInput 
                returnKeyType = "done"
                value = { address.value}
                onChangeText = {
                    (text) => setAddress({ value: text, error: '' })
                }
                error = {!!address.error }
                errorText = { address.error }
                />
                </View>
                <View style = { styles.col } >
                <b>Last Name (*)</b>
            <TextInput
                returnKeyType = "next"
                value = { lastname.value }
                onChangeText = {
                    (text) => setLastName({ value: text, error: '' })
                }
                error = {!!lastname.error }
                errorText = { lastname.error }
                />
                <b>Phone Number (*)</b>
            <TextInput
                returnKeyType = "next"
                value = { phonenum.value }
                onChangeText = {
                    (text) => setPhoneNum({ value: text, error: '' })
                }
                error = {!!phonenum.error }
                errorText = { phonenum.error }
                autoCapitalize = "none"
                />
                <b>Date of birth</b>
            <TextInput
                returnKeyType = "done"
                value = { dob.value }
                onChangeText = {
                    (text) => setDob({ value: text, error: '' })
                }
                error = {!!dob.error }
                errorText = { dob.error }
                />
                <b>Country</b>
            <TextInput
                returnKeyType = "done"
                value = { country.value}
                onChangeText = {
                    (text) => setCountry({ value: text, error: '' })
                }
                error = {!!country.error }
                errorText = { country.error }
                />
                </View>
            </View>
            <Button 
                mode = "contained"
                onPress = { onSavePressed }
                style = {
                    { marginTop: 24 }
                } > SAVE </Button> 
            
        </Background>
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

export default withRouter(Createcv);