import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import { theme } from '../core/theme'
import {Button as Button1} from 'react-native'
// import SwitchSelector from "react-native-switch-selector"
// import { StackActions } from '@react-navigation/native'

// const pushAction = StackActions.push('RegisterEmployerScreen');
// const popAction = StackActions.pop('RegisterEmployerScreen');

import {withRouter} from 'react-router-dom';

//const initialSelectedIndex = options.findIndex(({ value }) => value === "employer");

const Createcv = (props, { navigation }) => {
    
    const onLogoutPressed=()=>{props.history.push('/login');}

    const onProfilePressed=()=>{props.history.push('/profile');}

    //const onHomePressed=()=>{props.history.push('/samplecv');}

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
            
            <Header> Some sample CV </Header> 
            <View style = { styles.row } >
            <img src="https://mobilunity.com/wp-content/uploads/2017/07/javascript-developer-cv-example.png" alt="new" width="300" padding="400"
            />

            <img src="https://s3.amazonaws.com/thumbnails.venngage.com/template/de099396-b569-49ed-82e8-9ce56c31a660.png" alt="new" width="300"
            />
            <img src="https://s3.amazonaws.com/thumbnails.venngage.com/template/1087cb79-840e-41c8-a226-86b32fea67ed.png" alt="new" width="300"
            />
            </View>
            
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