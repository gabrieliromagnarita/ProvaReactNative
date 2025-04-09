import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
  
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  return (
    <View style={styles.container}>
        <View style={styles.top}><Text style={styles.texto}>Login!!</Text></View>
        <View style={styles.middle}>
            <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail} defaultValue={email}></TextInput>
            <TextInput style={styles.input} placeholder='Senha' onChangeText={setSenha} defaultValue={senha}></TextInput>
            <Button onPress={() => Alert.alert('Simple Button pressed')} color="#f194ff" title="Entrar"/>
        </View>
        <View style={styles.bottom}></View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top:{
    flex: 2,
    justifyContent: 'center'
  },
  middle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottom:{
    flex: 1,
  },
  input:{
    fontSize: 30,
    borderColor: "#f194ff",
    borderWidth: 2,
  },
  texto:{
    fontSize: 80,
    textAlign: 'center',
  }
});