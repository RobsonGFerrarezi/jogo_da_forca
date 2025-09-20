// src/components/HangmanDrawing.js

import React from 'react';
// Importa os componentes da biblioteca 'react-native-svg' para desenhar formas.
import Svg, { Line, Circle } from 'react-native-svg';

// Componente funcional que desenha a forca e o boneco.
// Ele recebe 'errors' como uma propriedade, que determina quantas partes do corpo desenhar.
const HangmanDrawing = ({ errors }) => {
  // Constantes para definir o tamanho da área de desenho (o "canvas").
  const GALLOWS_HEIGHT = 250;
  const GALLOWS_WIDTH = 200;

  // Define cada parte do corpo do boneco como um componente SVG separado.
  // O 'key' é um identificador único necessário para o React renderizar listas.
  const HEAD = <Circle key="head" cx="150" cy="70" r="20" stroke="black" strokeWidth="2.5" fill="none" />;
  const BODY = <Line key="body" x1="150" y1="90" x2="150" y2="150" stroke="black" strokeWidth="2.5" />;
  const RIGHT_ARM = <Line key="right-arm" x1="150" y1="110" x2="180" y2="130" stroke="black" strokeWidth="2.5" />;
  const LEFT_ARM = <Line key="left-arm" x1="150" y1="110" x2="120" y2="130" stroke="black" strokeWidth="2.5" />;
  const RIGHT_LEG = <Line key="right-leg" x1="150" y1="150" x2="180" y2="180" stroke="black" strokeWidth="2.5" />;
  const LEFT_LEG = <Line key="left-leg" x1="150" y1="150" x2="120" y2="180" stroke="black" strokeWidth="2.5" />;

  // Um array que armazena as partes do corpo na ordem em que devem aparecer.
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    // O componente Svg cria o "canvas" onde os desenhos serão renderizados.
    <Svg height={GALLOWS_HEIGHT} width={GALLOWS_WIDTH} viewBox="0 0 200 250">
      
      {/* 1. Desenho da Estrutura da Forca (sempre visível) */}
      <Line key="gallows-base" x1="20" y1="230" x2="100" y2="230" stroke="black" strokeWidth="2.5" />
      <Line key="gallows-vertical" x1="60" y1="230" x2="60" y2="20" stroke="black" strokeWidth="2.5" />
      <Line key="gallows-horizontal" x1="60" y1="20" x2="150" y2="20" stroke="black" strokeWidth="2.5" />
      <Line key="gallows-rope" x1="150" y1="20" x2="150" y2="50" stroke="black" strokeWidth="2.5" />

      {/* 2. Desenho do Boneco (condicional) */}
      {/* A mágica acontece aqui: `slice(0, errors)` pega as primeiras 'errors' partes do
          array BODY_PARTS. Se 'errors' for 2, ele pegará a cabeça e o corpo para renderizar. */}
      {BODY_PARTS.slice(0, errors)}
    </Svg>
  );
};

export default HangmanDrawing;