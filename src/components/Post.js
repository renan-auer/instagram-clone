import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

import Author from './Author'
import Comment from './Comment'

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image}
                    style={styles.image}
                />
                <Author email="renan@email.com" nickname="Renan"/>
                <Comment comments={this.props.comments}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 3 / 4,
        resizeMode: 'contain'
    }
})

export default Post;