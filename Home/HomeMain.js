import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Tabs from '../nav/NavHome'
import 'react-native-gesture-handler';
export default class HomeMain extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Tabs/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
})
