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
            <TextInput style={styles.input} placeholder='Mensagem' onChangeText={setMsg} defaultValue={msg}/>
            <Text style={styles.texto}>{nome} ({email}) diz: {msg}</Text>
            <Button onPress={() => Alert.alert('Simple Button pressed')} color="#f194ff"title="Enviar"/>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f194ff"
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
    fontSize: 20,
    textAlign: 'justify',
  },
  foto:{
    height: 100,
    width: 300,
  }
});