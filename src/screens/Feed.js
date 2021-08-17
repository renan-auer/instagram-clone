import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: "Rafael Pereira Filho",
            email: "rafaelprfl@gmail.com",
            image: require("../../assets/imgs/fence.jpg"),
            comments: [{
                nickname: "João Arruda",
                comment: "Show!"
            }, {
                nickname: "Filipi dos Santos",
                comment: "Já fui ai!"
            },]
        },
        {
            id: Math.random(),
            nickname: "Luiza Pereira",
            email: "luizapereira@gmail.com",
            image: require("../../assets/imgs/bw.jpg"),
            comments: []
        }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item}></Post>
                    } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed