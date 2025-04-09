import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login.js';
import Estoque from './screens/estoque.js';
import Mensagem from './screens/comunique.js';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Estoque" component={Drawer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function Drawer({}){
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Estoque" component={Estoque}/>
        <Drawer.Screen name="Fale conosco!" component={Mensagem}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}