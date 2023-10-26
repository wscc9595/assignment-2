import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styleObj } from "../style";
import DropDownPicker from "react-native-dropdown-picker";
import PressableButton from "../components/PressableButton";
import { writeToDB, updateDB } from "../Firebase/firestoreHelper";
import Checkbox from "expo-checkbox";
//add expense screen set up to let user add expense
export default function AddExpenses({ navigation, route }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ]);
  const [itemName, setItemName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [limit, setLimit] = useState(500);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (route && route.params) {
      setItemName(route.params.itemName);
      setUnitPrice(route.params.unitPrice.toString());
      setValue(route.params.quantity);
    }
  }, [route]);
  const [overbudget, setOverbudget] = useState(false);

  
  const handleCheckboxChange = (newValue) => {
    setChecked(newValue);
    setOverbudget(!newValue);
  };
  const handleSavePress = () => {
    // Validate user's entries here
    if (
      !itemName.trim() ||
      !unitPrice.trim() ||
      isNaN(unitPrice) ||
      parseInt(unitPrice) < 0
    ) {
      Alert.alert("Invalid Data", "Please enter valid data.");
      return;
    }
    // will write to database
    const data = {
      itemName: itemName,
      unitPrice: parseInt(unitPrice),
      quantity: value,
      overbudget: parseInt(unitPrice) * value > limit,
    };

    if (route.params) {
      if (route.params.overbudget) {
        data.overbudget = overbudget;
      }
      // If route.params is present, it means we are editing an existing entry
      Alert.alert(
        "Confirm Update",
        "Are you sure you want to update this expense?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              updateDB(route.params.id, data);
              navigation.pop();
            },
          },
        ]
      );
    } else {
      // If route.params is not present, it means we are adding a new entry
      writeToDB(data);
      navigation.pop();
    }
  };
  const handleCancel = () => {
    navigation.pop();
  };
  return (
    <View style={styleObj.formcontainer}>
      <View style={styleObj.inputWrapper}>
        <Text style={styleObj.label}>Item*</Text>
        <TextInput
          style={styleObj.amountInput}
          onChangeText={(text) => setItemName(text)}
          value={itemName}
        />
      </View>
      <View style={styleObj.inputWrapper}>
        <Text style={styleObj.label}>Unit Price*</Text>
        <TextInput
          style={styleObj.amountInput}
          onChangeText={(text) => setUnitPrice(text)}
          value={unitPrice}
          keyboardType="numeric"
        />
      </View>
      <View style={styleObj.inputWrapper}>
        <Text style={styleObj.label}>Quantity*</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styleObj.dropdownInputContainer}
          style={styleObj.dropdownInput}
        />
      </View>
      {route && route.params && route.params.overbudget && (
        <View style={styleObj.checkboxWrapper}>
          <Checkbox onValueChange={handleCheckboxChange} value={isChecked} />
          <Text>
            This item is marked as overbudget. Select the checkbox if you would
            like to approve it.
          </Text>
        </View>
      )}
      <View style={styleObj.pressableWrapper}>
        <PressableButton
          defaultStyle={styleObj.formPressableDefault}
          pressedStyle={styleObj.formPressablePressed}
          pressedFunction={handleCancel}
        >
          <Text>Cancel</Text>
        </PressableButton>
        <PressableButton
          defaultStyle={styleObj.formPressableDefault}
          pressedStyle={styleObj.formPressablePressed}
          pressedFunction={handleSavePress}
        >
          <Text>Save</Text>
        </PressableButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
