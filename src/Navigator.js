import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const menuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: "Feed",
            tabBarIcon: ({ tintColor }) =>
                <Icon name="camera" size={30} color={tintColor}/>
        }
    },
    AddPhoto: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions: {
            title: "Adicionar Foto",
            tabBarIcon: ({tintColor}) =>
                <Icon name="camera" size={30} color={tintColor}></Icon>
        }
    },
    Profile: {
        name: 'Profile',
        screen: Feed,
        navigationOptions: {
            title: "Perfil",
            tabBarIcon: ({tintColor}) =>
                <Icon name="user" size={30} color={tintColor}></Icon>
        }
    }
}

const menuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,

    }
}

const MenuNavigator = createBottomTabNavigator(menuRoutes, menuConfig)
export default MenuNavigator