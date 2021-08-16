import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments = [
     {comment: 'Excelente Foto!', nickname: 'José Polifácil Quaresma'},
     {comment: 'Uma porcaria!', nickname: 'Augustino Demócritos'}
    ]
    return (
      <SafeAreaView style={styles.container}>
        <Header></Header>
        <Post image={require("./assets/imgs/fence.jpg")} comments={comments}></Post>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})