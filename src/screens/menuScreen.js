// src/screens/MenuScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// Importa o componente Picker (dropdown) da biblioteca oficial.
import { Picker } from '@react-native-picker/picker';

// Importa os estilos e a lista de palavras.
import { styles } from '../styles/style';
import palavrasParaForca from '../data/palavrasJogo';

// Componente funcional que representa a tela de Menu.
// A propriedade 'navigation' é injetada automaticamente pelo React Navigation.
const MenuScreen = ({ navigation }) => {

  // Pega todas as chaves (nomes das categorias) do nosso objeto de palavras.
  const categories = Object.keys(palavrasParaForca);
  // Cria uma nova lista de categorias, adicionando "Geral" no início.
  const allCategories = ['Geral', ...categories];

  // Cria um estado chamado 'selectedCategory' para guardar a categoria que o usuário
  // escolher no Picker. O valor inicial é 'Geral'.
  const [selectedCategory, setSelectedCategory] = useState('Geral');

  // Função chamada quando o botão "Começar Jogo" é pressionado.
  const startGame = () => {
    // Usa o objeto 'navigation' para navegar para a tela 'Game'.
    // Passa a categoria selecionada como um parâmetro para a próxima tela.
    navigation.navigate('Game', { category: selectedCategory });
  };

  return (
    // Container principal da tela de menu.
    <View style={styles.menuContainer}>
      
      {/* Imagem do ícone da forca. */}
      <Image source={require('../img/hangman.png')} style={styles.img_forca} />

      {/* Título do jogo. */}
      <Text style={styles.menuTitle}>Jogo da Forca</Text>

      {/* Container para o Picker, para estilização da borda e fundo. */}
      <View style={styles.pickerContainer}>
        {/* O componente Picker funciona como um menu dropdown. */}
        <Picker
          selectedValue={selectedCategory} // O valor atualmente selecionado.
          // Função que atualiza o estado quando um novo item é selecionado.
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker} // Estilos para o picker.
          itemStyle={styles.pickerItem} // Estilos para os itens do picker.
        >
          {/* Mapeia a lista de categorias para criar um Picker.Item para cada uma. */}
          {allCategories.map((cat) => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>
      </View>

      {/* Botão que inicia o jogo. */}
      <TouchableOpacity style={styles.menuButton} onPress={startGame}>
        <Text style={styles.menuButtonText}>Começar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;