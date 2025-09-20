// App.js

// Importa o 'react-native-gesture-handler' no topo. Isso é necessário para o
// funcionamento correto da biblioteca de navegação em certas versões do Android.
import 'react-native-gesture-handler';
import React from 'react';

// Importa os componentes essenciais da biblioteca de navegação.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa as telas que farão parte da navegação.
import MenuScreen from './src/screens/menuScreen'; // A tela inicial do menu.
import GameScreen from './src/screens/GameScreen'; // A tela onde o jogo acontece.

// Cria uma instância do "Stack Navigator". A navegação em pilha funciona como uma
// pilha de cartas, onde cada nova tela é colocada em cima da anterior.
const Stack = createStackNavigator();

// Este é o componente principal (raiz) do seu aplicativo.
const App = () => {
  return (
    // O NavigationContainer é o componente que envolve toda a estrutura de navegação
    // e gerencia o estado das rotas.
    <NavigationContainer>
      {/* O Stack.Navigator define como as telas na pilha se comportarão. */}
      {/* initialRouteName="Menu" define que a primeira tela a ser exibida é a MenuScreen. */}
      <Stack.Navigator initialRouteName="Menu">
        
        {/* Define a primeira tela da pilha. */}
        <Stack.Screen
          name="Menu" // Nome único para a rota da tela de menu.
          component={MenuScreen} // O componente React que será renderizado para esta rota.
          options={{ title: 'Escolha uma Categoria' }} // Personaliza o título no cabeçalho.
        />
        
        {/* Define a segunda tela da pilha. */}
        <Stack.Screen
          name="Game" // Nome único para a rota da tela de jogo.
          component={GameScreen} // O componente que renderiza o jogo em si.
          // Personaliza o cabeçalho, removendo o botão de "voltar" padrão.
          options={{ title: 'Jogo da Forca', headerLeft: null }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;