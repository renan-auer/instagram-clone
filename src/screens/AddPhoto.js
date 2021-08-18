
import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
    PermissionsAndroid
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }

    pickImage = async () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            console.warn(res)
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.base64 } })
            }
        })
        
    }

    save = async () => {
        Alert.alert("Imagem adicionada", this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image}></Image>
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Algum comentário para a foto?'
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                    >
                    </TextInput>

                    <TouchableOpacity
                        onPress={this.save}
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})

export default AddPhoto