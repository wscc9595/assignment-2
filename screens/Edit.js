import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddExpenses from "./AddExpenses";
//edit screen set up to let user edit expense
export default function Edit({ navigation, route }) {
  return <AddExpenses route={route} navigation={navigation} />;
}

const styles = StyleSheet.create({});
