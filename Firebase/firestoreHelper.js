import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data) {
    console.log("fff");
    try {
        const docRef =  await addDoc(collection(database, "Expenses"), data);
        console.log('Data to be written: ', data);
      console.log("Document written with ID: ", docRef);
     
    } catch (err) {
      console.log(err);
    }}
    export async function updateDB(id,data) {
      try {
          const docRef =  await updateDoc(doc(database, "Expenses", id), data);
          console.log('Data to be written: ', data);
        console.log("Document written with ID: ", docRef.id);
       
      } catch (err) {
        console.log(err);
      }}
      export async function deleteFromDB(id) {
        try {
          await deleteDoc(doc(database, "Expenses", id));
        } catch (err) {
          console.log(err);
        }
      }
//     database.collection("cities").add(data)
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
//   }