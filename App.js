import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import Header from "./src/components/Header";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header></Header>
      </SafeAreaView>
    );
  }
};
