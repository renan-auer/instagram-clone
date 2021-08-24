import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TextInput, } from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    registrar = () => {
        this.props.onCreateUser(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Nome" style={styles.input}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />

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
                    onPress={this.registrar}
                    style={styles.buttom}
                >
                    <Text style={styles.buttomText}>
                        Registrar
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

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register)