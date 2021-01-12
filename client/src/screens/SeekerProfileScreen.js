import React, { useState, useEffect } from 'react'
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

import {
    Row,
    Col,
    ListGroupItem,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText,
    Container,
    Modal,
    ModalBody,
    ModalProps,
    ModalFooter,
    ModalHeader,
    ModalBodyProps,
    Progress,
    InputGroupAddon,
    FormGroup,
    InputGroup,
    Input,
    Form,
    Label
} from 'reactstrap';
import { 
    faMapMarkerAlt,
    faWrench,
    faDollarSign,
    faSignInAlt,
    faRibbon,
    faClock,
    faUserCog,
    faUser,
    faEnvelope,
    faPhone,
    faCheck,
    faTimes,
    faFile
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadButton from '../components/UploadButton'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import {withRouter} from 'react-router-dom';
import axios from 'axios'; 

import CookieService from '../services/CookieService'
import DataService from '../services/service'

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

const ProfileScreen = (props, { navigation }) => {
    const [UserID, setUserID] = useState(CookieService.get("UserID"));

    const [firstname, setFirstName] = useState({ value: '', error: '' })
    const [lastname, setLastName] = useState({ value: '', error: '' })
    const [phonenum, setPhoneNum] = useState({ value: '', error: '' })
    const [dob, setDob] = useState({ value: null, error: '' })
    const [address, setAddress] = useState({ value: '', error: '' })
    const [country, setCountry] = useState({ value: '', error: '' })
    const [selectedFile, setFile] = useState(null);
    const [filepath, setFilepath] = useState(null);

    useEffect( () => {
        if(UserID == undefined)
        {
            alert(`Opp! You haven't login yet`)
            props.history.push('/login');
            return;
        }
        DataService.getSeeker(UserID)
        .then(data=>{
            // console.log(data);
            try {
                const nameTokens = data.data.FullName.split(' ');
                var firstName = nameTokens[0];
                for(var i = 1; i < nameTokens.length-1; ++i)
                {
                    firstName += " " + nameTokens[i];
                }
                setFirstName({value: firstName});
                setLastName({value: nameTokens[nameTokens.length-1]});
                setPhoneNum({value:data.data.PhoneNumber});
                var dateOfBirth = new Date(data.data.DateOfBirth);
                setDob({value: dateOfBirth});
                const locationTokens = data.data.Location.split(', ');
                var address = locationTokens[0];
                for(var i = 1; i < locationTokens.length-1; ++i)
                {
                    address += ", " + locationTokens[i];
                }
                setAddress({value: address});
                setCountry({value: locationTokens[locationTokens.length - 1]});
            }
            catch
            {
                
            }
        })
    }, [])


    const onSavePressed = () => {

        const firstnameError = nameValidator(firstname.value)
        const lastnameError = nameValidator(lastname.value)
        const phonenumError = nameValidator(phonenum.value)
        if (firstnameError||lastnameError||phonenumError) {
            alert("Something went wrong please try again!");
            setFirstName({...firstname, error: firstnameError });
            setLastName({...lastname, error: lastnameError });
            setPhoneNum({...phonenum, error: phonenumError });
            return;
        }

        if(selectedFile != null) {
            handleFileUpload();

        }
        else {
            const data = {
                UserID: UserID,
                FullName: firstname.value + ' ' + lastname.value,
                DateOfBirth: dob.value,
                PhoneNumber: phonenum.value,
                Location: address.value + ', ' + country.value,
            };
    
            DataService.updateSeekerProfile(data)
            .then(() => {
                alert("successfully completed!");
            })
        }

    }
    const onLogoutPressed=()=>{
        CookieService.remove("UserID", {path: "/"});
        props.history.push('/login');
    }

    const handleFileUpload = () => {
        if(selectedFile == null)
        {
            return;
        }

        const formData = new FormData();

        formData.append('resume', selectedFile, selectedFile.name);

        axios.post('http://localhost:8080/api/resume/upload/', formData)
        .then(data => {
            const seeker = {
                UserID: UserID,
                FullName: firstname.value + ' ' + lastname.value,
                DateOfBirth: dob.value,
                PhoneNumber: phonenum.value,
                Location: address.value + ', ' + country.value,
                CV: data.data.path
            };
    
            DataService.updateSeekerProfile(seeker)
            .then(() => {
                alert("successfully completed!");
            })
        })
    }

    const handleFileChange = event => {
        setFile(event.target.files[0]);
    }

    const renderCVUpload = () => {
        const file = selectedFile ? selectedFile.name : null;
        return(
            <InputGroup style={{margin: '15px'}}>
                <InputGroupAddon addonType='append' style={{padding: '5px', marginRight: '49px'}}>
                    <FontAwesomeIcon icon={faFile} style={{margin: '5px', marginRight: '10px'}} />
                    <b>CV file:</b>
                </InputGroupAddon>
                <Input style={{height:'90%', maxWidth: '70%', float: 'right', fontSize: '16px'}} type="email" name="email" placeholder="Select CV: *.doc, *.docx, *.pdf" value={file} disabled='disabled'/>
                <InputGroupAddon addonType="prepend" style={{marginLeft: '10px'}}>
                    <UploadButton style={{height: '87%'}} onChange={handleFileChange}/>
                </InputGroupAddon>
            </InputGroup>
        );
    }

    const CVUpload = renderCVUpload();

    return ( 
        <Background>
            {/* <View
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
            </View> */}
            
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
                    <b>Date of birth</b>
                    {/* <TextInput
                        returnKeyType = "done"
                        value = { dob.value }
                        onChangeText = {
                            (text) => setDob({ value: text, error: '' })
                        }
                        error = {!!dob.error }
                        errorText = { dob.error }
                        /> */}
                    <DatePicker 
                        selected={dob.value} 
                        onChange={selectedDate => setDob({value: selectedDate})}
                        dateFormat="dd-MM-yyyy"
                        popperPlacement="top"
                        customInput={
                            <TextInput
                            returnKeyType = "done"
                            value = { dob.value }
                            onChangeText = {
                                (text) => setDob({ value: text, error: '' })
                            }
                            error = {!!dob.error }
                            errorText = { dob.error }
                            />
                        }
                        />
                </View>

                <View style = { styles.col } >
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
            <View>
                <b>Upload your CV</b>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    width: 600,
                    }}>
                {CVUpload}
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

export default withRouter(ProfileScreen);