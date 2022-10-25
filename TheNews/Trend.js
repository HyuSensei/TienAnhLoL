import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Trend extends Component {
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.item}> textInComponent </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    item:{
        border: 1,
        backgroundColor: 'red'
    }
})

