import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styleObj } from '../style';
import EntriesList from '../components/EntriesList';


export default function OverExpenses() {
    // const [overExpenses, setOverExpenses] = useState([])
    // useEffect(() => {
    //     onSnapshot(collection(database, "Expenses"), (querySnapshot) => {
    //       if (!querySnapshot.empty) {
    //         let newArray = [];
    //         // use a for loop to call .data() on overbudget item of querySnapshot.docs
    //         querySnapshot.docs.forEach((docSnap) => {
    //           if (docSnap.data().overbudget){newArray.push({ ...docSnap.data(), id: docSnap.id });}
              
    //         });
    //         setOverExpenses(newArray);
    //       }
    //     });
    //   }, []);
  return (
    <View style={styleObj.entryContainer}>
    <EntriesList overbudget={true}></EntriesList>
   </View>)
}

const styles = StyleSheet.create({})