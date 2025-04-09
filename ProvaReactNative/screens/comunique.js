import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
  
export default function Mensagem() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [msg, setMsg] = useState("");
  
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image style={styles.foto} source={require('../assets/header.jpg')}/>
        </View>
        <View style={styles.middle}>
            <TextInput style={styles.input} placeholder='Nome' onChangeText={setNome} defaultValue={nome}/>
            <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail} defaultValue={email}/>
            <TextInput style={styles.input} placeholder='mensagem' onChangeText={setMsg} defaultValue={msg}/>
            <Button onPress={() => Alert.alert('Simple Button pressed')} color="#f194ff"title="Entrar"/>
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
    flex: 1,
    justifyContent: 'center'
  },
  middle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottom:{
    flex: 2,
  },
  input:{
    fontSize: 30,
    borderColor: "#f194ff",
    borderWidth: 2,
  },
  texto:{
    fontSize: 80,
    textAlign: 'center',
  },
  foto:{
    flex: 1,
  }
});