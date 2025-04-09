import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
  
export default function Estoque({navigation}) {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [contador3, setContador3] = useState(0);
  const [contador4, setContador4] = useState(0);
  const [contador5, setContador5] = useState(0);

  function aumentar1(){
    setContador1(contador1 + 1)
  }
  function diminuir1(){
    if (contador1 > 0){
        setContador1(contador1 - 1)
    }
  }

  function aumentar2(){
    setContador2(contador2 + 1)
  }
  function diminuir2(){
    if (contador2 > 0){
        setContador2(contador2 - 1)
    }
  }

  function aumentar3(){
    setContador3(contador3 + 1)
  }
  function diminuir3(){
    if (contador3 > 0){
        setContador3(contador3 - 1)
    }
  }

  function aumentar4(){
    setContador4(contador4 + 1)
  }
  function diminuir4(){
    if (contador4 > 0){
        setContador4(contador4 - 1)
    }
  }

  function aumentar5(){
    setContador5(contador5 + 1)
  }
  function diminuir5(){
    if (contador5 > 0){
        setContador5(contador5 - 1)
    }
  }

  return (
    <View style={styles.container}>
        
        <View style={styles.top}></View>
        <View style={styles.one}>
            <Image style={styles.foto} source={require('../assets/ovo1.jpg')}/>
            <View style={styles.infos}>
                <Text style={styles.texto}>Ovo de Páscoa Ferreiro Rocher</Text>
                <Text style={styles.texto}>Preço: R$144,90</Text>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao} onPress={aumentar1}>
                        <Text style={styles.textBut}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={diminuir1}>
                        <Text style={styles.textBut}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.contText}>Adicionar ao carrinho: {contador1}</Text>
            </View>
        </View>
        <View style={styles.two}>
            <Image style={styles.foto} source={require('../assets/ovo2.jpg')}/>
            <View style={styles.infos}>
                <Text style={styles.texto}>Ovo de Páscoa Lacta Oreo            </Text>
                <Text style={styles.texto}>Preço: R$46,99</Text>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao} onPress={aumentar2}>
                        <Text style={styles.textBut}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={diminuir2}>
                        <Text style={styles.textBut}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.contText}>Adicionar ao carrinho: {contador2}</Text>
            </View>
        </View>
        <View style={styles.three}>
            <Image style={styles.foto} source={require('../assets/ovo3.jpg')}/>
            <View style={styles.infos}>
                <Text style={styles.texto}>Ovo de Páscoa Sonho de Valsa</Text>
                <Text style={styles.texto}>Preço: R$62,99</Text>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao} onPress={aumentar3}>
                        <Text style={styles.textBut}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={diminuir3}>
                        <Text style={styles.textBut}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.contText}>Adicionar ao carrinho: {contador3}</Text>
            </View>
        </View>
        <View style={styles.four}>
            <Image style={styles.foto} source={require('../assets/ovo4.jpg')}/>
            <View style={styles.infos}>
                <Text style={styles.texto}>Ovo de Páscoa Kit Kat             </Text>
                <Text style={styles.texto}>Preço: R$62,00</Text>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao} onPress={aumentar4}>
                        <Text style={styles.textBut}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={diminuir4}>
                        <Text style={styles.textBut}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.contText}>Adicionar ao carrinho: {contador4}</Text>
            </View>
        </View>
        <View style={styles.five}>
            <Image style={styles.foto} source={require('../assets/ovo5.jpg')}/>
            <View style={styles.infos}>
                <Text style={styles.texto}>Ovo de Páscoa Hello Kitty        </Text>
                <Text style={styles.texto}>Preço: R$226,26</Text>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao} onPress={aumentar5}>
                        <Text style={styles.textBut}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={diminuir5}>
                        <Text style={styles.textBut}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.contText}>Adicionar ao carrinho: {contador5}</Text>
            </View>
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
  },
  one:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  two:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  three:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  four:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  five:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bottom:{
    flex: 1,
  },
  foto:{
    height: 120,
    width: 50,
  },
  infos:{
    flexDirection: 'column',
  },
  texto:{
    fontSize: 20,
  },
  botao:{
    height: 30,
    width: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginLeft: 10,
  },
  textBut:{
    fontSize: 30,
    color: 'white',
  },
  botoes:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  contText:{
    fontSize: 22,
  }
});