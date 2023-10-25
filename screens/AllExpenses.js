import { View, StyleSheet, Text } from "react-native"
import React, { useEffect, useState } from "react"


import { collection, onSnapshot } from "firebase/firestore"
import { database, firestore } from "../Firebase/firebaseSetup"
import EntriesList from "../components/EntriesList"
import { styleObj } from "../style"



export default function AllExpenses() {
    const [allExpenses, setAllExpenses] = useState([])

    // useEffect(() => {
    //     onSnapshot(collection(database, "Expenses"), (querySnapshot) => {
    //       if (!querySnapshot.empty) {
    //         let newArray = [];
    //         // use a for loop to call .data() on each item of querySnapshot.docs
    //         querySnapshot.docs.forEach((docSnap) => {
    //           newArray.push({ ...docSnap.data(), id: docSnap.id });
    //         });
    //         setAllExpenses(newArray);
    //       }
    //     });
    //   }, []);
  return (
   <View style={styleObj.entryContainer}>
    <EntriesList overbudget={false}></EntriesList>
   </View>)
  
}

const styles = StyleSheet.create({})