import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styleObj } from "../style";
import EntriesList from "../components/EntriesList";
//overexpense screen setup to render entry list
export default function OverExpenses() {
  return (
    <View style={styleObj.entryContainer}>
      <EntriesList overbudget={true}></EntriesList>
    </View>
  );
}

const styles = StyleSheet.create({});
