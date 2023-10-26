import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { database, firestore } from "../Firebase/firebaseSetup";
import EntriesList from "../components/EntriesList";
import { styleObj } from "../style";
//All expense screen setup to render entries
export default function AllExpenses() {
  const [allExpenses, setAllExpenses] = useState([]);

  return (
    <View style={styleObj.entryContainer}>
      <EntriesList overbudget={false}></EntriesList>
    </View>
  );
}

const styles = StyleSheet.create({});
