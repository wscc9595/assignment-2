import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from '../screens/AllExpenses';
import PressableButton from './PressableButton';
import { styleObj } from '../style';
import OverExpenses from '../screens/OverExpenses';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function Home({navigation}) {
  return (
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon: () => {
        if (route.name === "All Expenses")
          return <AntDesign name="home" size={24} color="black" />
        else if (route.name === "Overbudget Expenses")
          return <AntDesign name="warning" size={24} color="black" />
      }, })}>
    <Tab.Screen name="All Expenses" component={AllExpenses} 
    options={()=>
            ({headerRight: () => (
              <PressableButton
                pressedFunction={() => {
                  navigation.navigate("Add An Expense");
                }}
                pressedStyle={styleObj.pressedStyle}
                defaultStyle={styleObj.defaultStyle}
              >
                <Text style={styleObj.plus}>+</Text>
              </PressableButton>)
            })}/>
    <Tab.Screen name="Overbudget Expenses" component={OverExpenses}options={()=>
            ({headerRight: () => (
              <PressableButton
                pressedFunction={() => {
                  navigation.navigate("Add An Expense");
                }}
                pressedStyle={styleObj.pressedStyle}
                defaultStyle={styleObj.defaultStyle}
              >
                <Text style={styleObj.plus}>+</Text>
              </PressableButton>)
            })}/>
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})