// src/screens/GameScreen.js

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Alert, BackHandler } from 'react-native';

// Importações dos nossos componentes e dados customizados.
import { styles } from '../styles/style';
import HangmanDrawing from '../components/HangmanDrawing';
import palavrasParaForca from '../data/palavrasJogo';

// Função auxiliar para remover acentos de uma string (ex: 'Á' vira 'A').
// Isso simplifica a comparação, pois o palpite 'A' deve valer para 'Á'.
const normalizeString = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

// Componente principal da tela de jogo.
const GameScreen = ({ route, navigation }) => {
  // Pega a categoria passada como parâmetro da tela de Menu.
  const { category: initialCategory } = route.params;

  // --- ESTADOS DO COMPONENTE ---
  const [palavraAtual, setPalavraAtual] = useState(''); // A palavra secreta a ser adivinhada.
  const [categoriaAtual, setCategoriaAtual] = useState(''); // A categoria da palavra atual.
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]); // Lista de todas as letras tentadas pelo jogador.
  const [inputValue, setInputValue] = useState(''); // O texto digitado no campo de input (controlado).
  const [palavrasJogadas, setPalavrasJogadas] = useState([]); // Guarda palavras já usadas para não repetir na mesma sessão.

  // --- LÓGICA PRINCIPAL DO JOGO ---

  // Função para sortear uma nova palavra.
  // `useCallback` otimiza a função, evitando que ela seja recriada a cada renderização.
  const selecionarNovaPalavra = useCallback(() => {
    // Acessa o estado anterior de 'palavrasJogadas' para garantir que temos a lista mais atualizada.
    setPalavrasJogadas(prevPalavrasJogadas => {
      let categoriaSelecionada = initialCategory;

      // Se a categoria for 'Geral', sorteia uma categoria aleatória.
      if (initialCategory === 'Geral') {
        const todasCategorias = Object.keys(palavrasParaForca);
        categoriaSelecionada = todasCategorias[Math.floor(Math.random() * todasCategorias.length)];
      }

      // Filtra as palavras da categoria, removendo as que já foram jogadas.
      const palavrasDisponiveis = palavrasParaForca[categoriaSelecionada].filter(
        (p) => !prevPalavrasJogadas.includes(p)
      );

      // Se não há mais palavras, o jogador venceu a categoria.
      if (palavrasDisponiveis.length === 0) {
        Alert.alert('Parabéns!', `Você zerou a categoria "${categoriaSelecionada}"!`, [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
        return prevPalavrasJogadas; // Não altera o estado.
      }

      // Sorteia uma nova palavra e reinicia o estado do jogo.
      const novaPalavra = palavrasDisponiveis[Math.floor(Math.random() * palavrasDisponiveis.length)];
      setPalavraAtual(novaPalavra.toUpperCase());
      setCategoriaAtual(categoriaSelecionada);
      setLetrasAdivinhadas([]);
      
      // Retorna a nova lista de palavras jogadas para atualizar o estado.
      return [...prevPalavrasJogadas, novaPalavra];
    });
  }, [initialCategory, navigation]);

  // `useEffect` que executa UMA VEZ quando o componente é montado.
  // É responsável por chamar a função que inicia o primeiro round do jogo.
  useEffect(() => {
    selecionarNovaPalavra();
  }, [selecionarNovaPalavra]);

  // --- VERIFICAÇÃO DE VITÓRIA E DERROTA ---
  const palavraNormalizada = normalizeString(palavraAtual);

  // Filtra as letras adivinhadas em duas listas: corretas e erradas.
  const letrasCorretas = letrasAdivinhadas.filter((letra) => palavraNormalizada.includes(normalizeString(letra)));
  const letrasErradas = letrasAdivinhadas.filter((letra) => !palavraNormalizada.includes(normalizeString(letra)));

  // Condição de vitória: todas as letras da palavra foram adivinhadas.
  const vitoria = palavraNormalizada.split('').every((char) => char === ' ' || letrasCorretas.some(l => normalizeString(l) === char));
  // Condição de derrota: o número de letras erradas chegou a 6.
  const derrota = letrasErradas.length >= 6;

  // --- FUNÇÕES DE INTERAÇÃO ---

  // Processa o palpite do jogador.
  const handleGuess = () => {
    if (!inputValue) return; // Ignora se o input estiver vazio.
    const letra = inputValue[0].toUpperCase();
    setInputValue(''); // Limpa o input após o palpite.

    // Impede palpites repetidos.
    if (letrasAdivinhadas.includes(letra)) {
      Alert.alert('Letra repetida', 'Você já tentou esta letra.');
      return;
    }

    // Adiciona a letra à lista de letras já tentadas.
    setLetrasAdivinhadas((prev) => [...prev, letra]);
  };

  // `useEffect` que monitora o estado de vitória ou derrota.
  // Roda sempre que uma dessas condições muda.
  useEffect(() => {
    if (vitoria && palavraAtual) {
      Alert.alert('Você ganhou!', 'Deseja jogar novamente?', [
        { text: 'Nova Palavra', onPress: selecionarNovaPalavra },
        { text: 'Voltar ao Menu', onPress: () => navigation.goBack() },
      ]);
    }
    if (derrota) {
      Alert.alert('Você morreu!', `A palavra era: ${palavraAtual}`, [
        { text: 'Tentar Novamente', onPress: selecionarNovaPalavra },
        { text: 'Voltar ao Menu', onPress: () => navigation.goBack() },
      ]);
    }
  }, [vitoria, derrota, palavraAtual, selecionarNovaPalavra, navigation]);

  // `useEffect` para gerenciar o botão "voltar" físico do Android.
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Atenção!", "Tem certeza que quer sair do jogo?", [
        { text: "Cancelar", onPress: () => null, style: "cancel" },
        { text: "SIM", onPress: () => navigation.goBack() }
      ]);
      return true; // Impede o comportamento padrão de fechar o app.
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove(); // Limpa o listener ao sair da tela.
  }, [navigation]);

  // --- RENDERIZAÇÃO DO COMPONENTE ---
  return (
    <View style={styles.gameContainer}>
      <Text style={styles.categoryText}>Categoria: {categoriaAtual}</Text>
      
      {/* Desenha a forca com base no número de erros. */}
      <HangmanDrawing errors={letrasErradas.length} />

      {/* Mostra as letras erradas. */}
      <View style={styles.wrongLettersContainer}>
        <Text style={styles.wrongLettersTitle}>Letras erradas:</Text>
        <Text style={styles.wrongLettersText}>{letrasErradas.join(' ')}</Text>
      </View>

      {/* Container que exibe a palavra secreta com underlines. */}
      <View style={styles.wordGroupContainer}>
        {/* Divide a frase em palavras (ex: "BOB ESPONJA"). */}
        {palavraAtual.split(' ').map((word, wordIndex) => (
          <View key={wordIndex} style={styles.wordSegment}>
            {/* Divide cada palavra em letras. */}
            {word.split('').map((char, charIndex) => {
              const charNormalizado = normalizeString(char);
              // Verifica se a letra atual já foi adivinhada corretamente.
              const letraEncontrada = letrasCorretas.find((l) => normalizeString(l) === charNormalizado);
              return (
                <View key={charIndex} style={styles.letterContainer}>
                  {/* Se a letra foi encontrada, exibe-a; senão, exibe vazio. */}
                  <Text style={styles.letter}>{letraEncontrada ? char : ''}</Text>
                </View>
              );
            })}
          </View>
        ))}
      </View>

      {/* Campo de texto para o jogador inserir o palpite. */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          maxLength={1}
          autoCapitalize="characters"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleGuess}
          // Desabilita o input se o jogo terminou.
          editable={!vitoria && !derrota}
        />
      </View>
    </View>
  );
};

export default GameScreen;