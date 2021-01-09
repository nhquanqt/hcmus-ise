import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, TextInput as TextField } from 'react-native-paper'
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

import {withRouter} from 'react-router-dom';

import CookieService from '../services/CookieService'
import DataService from '../services/service'

const onChange = (newValue) => {
    console.log(newValue);
};

//const initialSelectedIndex = options.findIndex(({ value }) => value === "employer");

const CompanyProfileScreen = (props, { navigation }) => {
    const [UserID, setUserID] = useState(CookieService.get("UserID"));

    const [companyname, setCompName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    // const [compIndustry, setIndust] = useState({ value: '', error: '' })
    const [compLocation, setLoca] = useState({ value: '', error: '' })
    const [compPhone, setPhone] = useState({ value: '', error: '' })
    const [compDesc, setDecs] = useState({ value: '', error: '' })

    useEffect( () => {
        console.log(UserID);
        if(UserID == null)
        {
            alert(`Opp! You haven't login yet`)
            props.history.push('/login');
            return;
        }

        DataService.getCompany(UserID)
        .then(data => {
            setCompName({value: data.data.CompanyName});
            setEmail({value: data.data.CompanyEmail});
            setLoca({value: data.data.Location});
            setPhone({value: data.data.CompanyPhoneNumber});
            setDecs({value: data.data.CompanyDescription});
        })
    }, [])

    const onSavePressed = () => {
        const compnameError = nameValidator(companyname.value)
        // const compIndustryError = nameValidator(compIndustry.value)
        const compPhoneError = nameValidator(compPhone.value)
        const compLocationError = nameValidator(compLocation.value)
        const emailError = emailValidator(email.value)
        // if (emailError || compnameError||compIndustryError||compPhoneError||compLocationError) {
        if (emailError || compnameError||compPhoneError||compLocationError) {
            alert("Something went wrong please try again!");
            setCompName({...companyname, error: compnameError });
            // setIndust({...compIndustry, error: compIndustryError });
            setPhone({...compPhone, error: compPhoneError });
            setLoca({...compLocation, error: compLocationError});
            setEmail({...email, error: emailError });
            return;
        }

        const company = {
            UserID: UserID,
            FieldID: null,
            CompanyName: companyname.value,
            Location: compLocation.value,
            CompanyEmail: email.value,
            CompanyPhoneNumber: compPhone.value,
            CompanyDescription: compDesc.value,
        };
        console.log(compDesc.value);

        DataService.updateCompanyProfile(company)
        .then(() => {
            alert("Profile successfully completed!");
        })
    }
    
    const onLogoutPressed=()=>{
        CookieService.remove("UserID", {path: "/"});
        props.history.push('/login');
    }

    return ( 
        <Background>
            <View
                style={{
                flexDirection: "row",
                height: 75,
                width:850,
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
                </View>
                <View style = { styles.col } >
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
                {/* <b>Company's Industry(*)</b>
            <TextInput 
                returnKeyType = "done"
                value = { compIndustry.value }
                onChangeText = {
                    (text) => setIndust({ value: text, error: '' })
                }
                error = {!!compIndustry.error }
                errorText = { compIndustry.error }
                /> */}
            <b>Company's Location</b>
            <TextInput 
                returnKeyType = "done"
                value = { compLocation.value}
                onChangeText = {
                    (text) => setLoca({ value: text, error: '' })
                }
                error = {!!compLocation.error }
                errorText = { compLocation.error }
                />
                </View>
                
            </View>
            <View>
                <b>Company's Description</b>
                <textarea
                    value = { compDesc.value}
                    onChange = {
                        (event) => setDecs({ value: event.target.value, error: '' })
                    }
                    style={
                        {
                            padding: 12,
                            height: 128,
                            width: 600
                        }
                    }
                    />
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