// src/styles/style.js

import { StyleSheet } from 'react-native';

// `StyleSheet.create` otimiza os estilos para melhor performance.
export const styles = StyleSheet.create({

  // --- ESTILOS DA TELA DE MENU ---
  menuContainer: {
    flex: 1, // Ocupa toda a tela.
    justifyContent: 'center', // Alinha itens verticalmente ao centro.
    alignItems: 'center', // Alinha itens horizontalmente ao centro.
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  menuTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  pickerContainer: {
    width: '85%',
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 25,
    backgroundColor: '#fff',
    elevation: 3,
  },
  picker: {
    height: 55,
    width: '100%',
    color: '#333',
  },
  menuButton: {
    backgroundColor: '#28a745', // Verde
    paddingVertical: 16,
    paddingHorizontal: 35,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    elevation: 4,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img_forca: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    elevation: 8,
  },

  // --- ESTILOS DA TELA DE JOGO ---
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 15,
    textTransform: 'capitalize', // Deixa a primeira letra maiúscula.
  },
  wordGroupContainer: {
    flexDirection: 'row', // Alinha os itens na horizontal.
    flexWrap: 'wrap', // Permite que o conteúdo quebre para a próxima linha.
    justifyContent: 'center',
    marginBottom: 30,
    minHeight: 60,
  },
  wordSegment: {
    flexDirection: 'row',
    marginHorizontal: 8, // Espaço entre palavras (ex: "BOB" e "ESPONJA").
    marginBottom: 10,
  },
  letterContainer: {
    marginHorizontal: 2, // Espaço entre as letras de uma mesma palavra.
    borderBottomWidth: 3,
    borderBottomColor: '#333',
    minWidth: 32, // Largura mínima do underline.
    height: 45,
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinha a letra na parte de baixo.
    paddingBottom: 5,
  },
  letter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  wrongLettersContainer: {
    marginBottom: 25,
    marginTop: 10,
    alignItems: 'center',
  },
  wrongLettersTitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 5,
  },
  wrongLettersText: {
    fontSize: 24,
    color: '#dc3545', // Vermelho
    fontWeight: 'bold',
    letterSpacing: 6, // Aumenta o espaçamento entre as letras erradas.
  },
  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
  },
  input: {
    flex: 1, // Ocupa todo o espaço disponível no container.
    borderWidth: 2,
    borderColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
});