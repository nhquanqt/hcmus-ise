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

const onChange = (newValue) => {
    console.log(newValue);
};

//const initialSelectedIndex = options.findIndex(({ value }) => value === "employer");

const CompanyProfileScreen = (props, { navigation }) => {
    const [companyname, setCompName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [compIndustry, setIndust] = useState({ value: '', error: '' })
    const [compLocation, setLoca] = useState({ value: '', error: '' })
    const [compPhone, setPhone] = useState({ value: '', error: '' })

    const onSavePressed = () => {
        const compnameError = nameValidator(companyname.value)
        const compIndustryError = nameValidator(compIndustry.value)
        const compPhoneError = nameValidator(compPhone.value)
        const compLocationError = nameValidator(compLocation.value)
        const emailError = emailValidator(email.value)
        if (emailError || compnameError||compIndustryError||compPhoneError||compLocationError) {
            alert("Something went wrong please try again!");
            setCompName({...companyname, error: compnameError });
            setIndust({...compIndustry, error: compIndustryError });
            setPhone({...compPhone, error: compPhoneError });
            setLoca({...compLocation, error: compLocationError});
            setEmail({...email, error: emailError });
            return;
        }
        alert("successfully completed!");
    }
    const onLogoutPressed=()=>{props.history.push('/login');}

    return ( 
        <Background>
            <View
                style={{
                flexDirection: "row",
                height: 75,
                width:500,
                padding: 20,
                borderBottomColor: '#000000',
                borderBottomWidth: 1,
                borderTopColor:'#000000',
                borderTopWidth: 1,
                borderRightColor:'#000000',
                borderRightWidth: 1,
                borderLeftColor:'#000000',
                borderLeftWidth: 1
                }} >
            <h2>JOB SEARCH</h2>
            <View style={{ flex: 1 }} />
            <Button1
                title="Home"
                onPress={onLogoutPressed}
            />
            <Button1
                title="Logout"
                color="#ff0000"
                onPress={onLogoutPressed} />
            </View>
            
            <Header> Company's Profile </Header> 
            <View style = { styles.row } >
            <View style = { styles.col } >
            <b>Company's Name (*)</b>
            <TextInput 
                returnKeyType = "next"
                value = { companyname.value }
                onChangeText = {
                    (text) => setCompName({ value: text, error: '' })
                }
                error = {!!companyname.error }
                errorText = { companyname.error }
                />
            <b>Company's Email (*)</b>
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
                <b>Company's Phone</b>
                <TextInput 
                returnKeyType = "done"
                value = { compPhone.value}
                onChangeText = {
                    (text) => setPhone({ value: text, error: '' })
                }
                error = {!!compPhone.error }
                errorText = { compPhone.error }
                />
                </View>
                <View style = { styles.col } >
                <b>Company's Industry(*)</b>
            <TextInput 
                returnKeyType = "done"
                value = { compIndustry.value }
                onChangeText = {
                    (text) => setIndust({ value: text, error: '' })
                }
                error = {!!compIndustry.error }
                errorText = { compIndustry.error }
                />
            <b>Company's Location</b>
            <TextInput 
                returnKeyType = "done"
                value = { compLocation.value}
                onChangeText = {
                    (text) => compLocation({ value: text, error: '' })
                }
                error = {!!compLocation.error }
                errorText = { compLocation.error }
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

export default withRouter(CompanyProfileScreen);