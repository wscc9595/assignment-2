import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddExpenses from './AddExpenses'

export default function Edit({navigation,route}) {
  return (
    <AddExpenses route={route} navigation={navigation}/>
  )
}

const styles = StyleSheet.create({})