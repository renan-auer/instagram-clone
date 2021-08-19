import React from 'react'
import { 
    createBottomTabNavigator, 
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Login' }},
    Register: { screen: Register, navigationOptions: { title: 'Registrar' } }
}, {
    initialRouteName: 'Login'
})

const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
}, {
    initialRouteName: 'Auth'
})

const menuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: "Feed",
            tabBarIcon: ({ tintColor }) =>
                <Icon name="feed" size={30} color={tintColor}/>
        }
    },
    AddPhoto: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: "Adicionar Foto",
            tabBarIcon: ({tintColor}) =>
                <Icon name="camera" size={30} color={tintColor}></Icon>
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
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