import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity, View, Text, TextInput, } from 'react-native'

import { login } from '../store/actions/user'

class Login extends Component {
    state = {
        name: 'temp',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state})
    }

    registar = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Email" style={styles.input}
                    keyboardType="email-address" value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput placeholder="Password" style={styles.input}
                   keyboardType="email-address"
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
                    onPress={ this.registar }
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

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)