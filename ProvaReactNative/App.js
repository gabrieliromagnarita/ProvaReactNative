/* import { StyleSheet, Text, View } from 'react-native'; */

/* import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Login} from './screens/login'; */

/* export default function App() {
  return (

  );
} */

import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
  
export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  return (
    <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.middle}>
            <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail} defaultValue={email}></TextInput>
            <TextInput style={styles.input} placeholder='Senha' onChangeText={setSenha} defaultValue={senha}></TextInput>
            <button></button>
        </View>
        <View style={styles.bottom}></View>
    </View>
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
