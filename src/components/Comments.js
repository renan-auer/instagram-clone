import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert
} from 'react-native'

class Comment extends Component {
    render () {
        let view = null
        if(this.props.comments)
        view = this.props.comments.map((item, index) => {
            return (
                <View style={style.commentContainer} key={index}>
                    <Text style={styles.nickname}>{item.nickname}</Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            )
        })

        return (
            <View style={style.container}>
                {view}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        margin: 10
    },
    commentsContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    title: {
        color: '#444',
        marginLeft: 5,
        fontWeight: 'bold'
    },
    comment: {
        color: '#555'
    }
})

export default Comment