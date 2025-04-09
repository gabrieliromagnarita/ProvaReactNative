import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function Login(navigation) {
    const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.middle}>
            <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail} defaultValue={email}></TextInput>
        </View>
        <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });