import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Trend from '../TheNews/Trend'
export default class XuHuong extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Trend></Trend>
      </View>
    )
  }
}
