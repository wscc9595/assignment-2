import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PressableButton from "./PressableButton";
import { styleObj } from "../style";
import { AntDesign } from "@expo/vector-icons";
import Edit from "../screens/Edit";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { database } from "../Firebase/firebaseSetup";
// to render scrollable expense list
export default function EntriesList({ overbudget }) {
  const navigation = useNavigation();
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    let q = collection(database, "Expenses");
    if (overbudget) {
      q = query(
        collection(database, "Expenses"),
        where("overbudget", "==", true)
      );
    }

    onSnapshot(q, (querySnapshot) => {
      let newArray = [];
      // use a for loop to call .data() on each item of querySnapshot.docs
      querySnapshot.docs.forEach((docSnap) => {
        newArray.push({ ...docSnap.data(), id: docSnap.id });
      });
      setExpenses(newArray);
    });
  }, []);
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => {
        return (
          <PressableButton
            defaultStyle={styleObj.entryDefault}
            pressedStyle={styleObj.entryPressed}
            pressedFunction={() => {
              navigation.navigate("Edit", item);
            }}
          >
            <Text style={styleObj.itemTitle}>{item.itemName}</Text>
            <View style={styleObj.signWrapper}>
              {item.overbudget === true && (
                <AntDesign name="warning" size={24} color="#fff" />
              )}
              <View style={styleObj.expenseWrapper}>
                <Text
                  style={styleObj.expenseText}
                >{`${item.quantity}*${item.unitPrice}`}</Text>
              </View>
            </View>
          </PressableButton>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
