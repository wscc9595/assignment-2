import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Alert  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from './screens/AllExpenses';
import PressableButton from './components/PressableButton';
import AddExpenses from './screens/AddExpenses';
import {styleObj} from './style';
import Home from './components/Home';
import Edit from './screens/Edit';
import { Ionicons } from '@expo/vector-icons';
import { deleteFromDB } from './Firebase/firestoreHelper';
const Stack = createNativeStackNavigator();


export default function App() {
  const handleDeletePress = () => {
    // Show an alert before deleting
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: ({route}) => {
            // Call the deleteFromDB function if the user confirms
            deleteFromDB(route.params.id);
            // Navigate back to the Home screen
            navigation.navigate('Home');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Add An Expense" component={AddExpenses}/>
      <Stack.Screen name="Edit" component={Edit} options={({ route, navigation })=>{return{headerRight:()=>(<PressableButton pressedStyle={{
            backgroundColor: "#414497",
            opacity:0.6
          }}
      pressedFunction={()=>{
        Alert.alert(
          'Confirm Update',
          'Are you sure you want to delete this expense?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                deleteFromDB(route.params.id);
         navigation.pop();
      } }])
        // Alert.alert('Expense Deleted!');
        // deleteFromDB(route.params.id);navigation.navigate('Home'); 
      }}
      ><Ionicons name="trash-outline" size={24} color="black" /></PressableButton>)}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
