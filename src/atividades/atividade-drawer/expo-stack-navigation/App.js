import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home'; 
import SobreScreen from './src/Sobre'; 
import UsuarioScreen from './src/Usuario';

const RootStack = createNativeStackNavigator({ 
  // initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    Home: HomeScreen, 
    Sobre: SobreScreen, 
    Usuario: {
      screen: UsuarioScreen, 
      initialParams: { nomeApp: 'SISTEMA ROTAS' },
      options: {
        title: 'Configurações de usuário'
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}