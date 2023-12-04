import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BeautySchedule from "../../components/BeautySchedule/BeautySchedule";
import SettingsManager from "../SettingsManager/SettingsManager";
import Chat from "../Chat/Chat";
import EmptyHeader from "../../components/EmptyHeader/EmptyHeader";
import ServiceHair from "../ServiceHair/ServiceHair";

const Tab = createBottomTabNavigator();

const HomeIcon = require('../../assets/icons8-bate-papo-64.png'); // Importe a imagem para a guia "Home"
const ChatIcon = require('../../assets/icons8-configurações-64.png'); // Importe a imagem para a guia "Chat"
const SettingsIcon = require('../../assets/icons8-pesquisar-50.png'); // Importe a imagem para a guia "Settings"

const screanOPtion = ({ route }) => ({
    header: () => <EmptyHeader />,
    tabBarIcon: ({ color, size }) => {
        let iconSource;

        if (route.name === 'Home') {
            iconSource = HomeIcon;
        } else if (route.name === 'Chat') {
            iconSource = ChatIcon;
        } else if (route.name === 'Settings') {
            iconSource = SettingsIcon;
        }

        return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
    },
    tabBarActiveTintColor: "#ffffff",
    tabBarInactiveTintColor: "#f6f6f6",
    tabBarStyle: [
        {
            display: 'flex',
            backgroundColor: '#cd50ef',

        },
        null,
    ],
})

export default function Hub() {
    return (
        <Tab.Navigator
            screenOptions={screanOPtion}

        >
            <Tab.Screen name="Home" component={BeautySchedule} />
            <Tab.Screen name="Settings" component={SettingsManager} />
        </Tab.Navigator>
    );
}
