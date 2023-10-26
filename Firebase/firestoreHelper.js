import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";
// database manage functions
export async function writeToDB(data) {
  try {
    const docRef = await addDoc(collection(database, "Expenses"), data);
  } catch (err) {
    console.log(err);
  }
}
export async function updateDB(id, data) {
  try {
    const docRef = await updateDoc(doc(database, "Expenses", id), data);
  } catch (err) {
    console.log(err);
  }
}
export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(database, "Expenses", id));
  } catch (err) {
    console.log(err);
  }
}
