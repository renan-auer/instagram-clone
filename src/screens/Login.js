import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TextInput, } from 'react-native'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Email" style={styles.input}
                    autoFocus={true} keyboardType="email-address" value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput placeholder="Email" style={styles.input}
                    autoFocus={true} keyboardType="email-address"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />

                <TouchableOpacity
                    onPress={this.login}
                    style={styles.buttom}
                >
                    <Text style={styles.buttomText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ console.warn(2)}
                    style={styles.buttom}
                >
                    <Text style={styles.buttomText}>
                        Criar nova conta
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        width: '90%',
        backgroundColor: '#4286f4',
        borderRadius: 10,
        justifyContent: 'center',
      alignItems: 'center'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})

export default Login