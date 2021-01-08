import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

import CookieService from '../services/CookieService';
import DataService from '../services/service'

const Dashboard = (props, { navigation }) => {
    return (
        <Background>
            <Logo />
            <Header>Let’s start</Header>
            <Paragraph>
                Your amazing app starts here. Open you favorite code editor and start
                editing this project.
            </Paragraph>
            <Button
                mode="outlined"
                onPress={() => {
                        CookieService.remove("UserID");
                        props.history.push('/');
                    }
                }
            >
            Logout
            </Button>
        </Background>
    )
}

export default Dashboard