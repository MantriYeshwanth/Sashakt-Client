import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';

const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'SOCIETY',
      row: 6,
      col: 0,
      correct: false,
    },
    2: {
      clue: 'egg',
      answer: 'MENTAL',
      row: 2,
      col: 2,
      correct: false,
    },
    3: {
      clue: 'egg',
      answer: 'YES',
      row: 1,
      col: 5,
      correct: false,
    },
  },
  down: {
    4: {
      clue: 'three minus two',
      answer: 'LEAD',
      row: 1,
      col: 3,
      correct: false,
    },
    5: {
      clue: 'three plus zero',
      answer: 'HEALTHY',
      row: 0,
      col: 6,
      correct: false,
    },
    6: {
      clue: 'egg',
      answer: 'FOOD',
      row: 4,
      col: 1,
      correct: false,
    },
  },
};

export default function Cross() {
  return (
    <div style={{ display: 'flex', width: '130%' }}>
    <Crossword
      data={data}
      cellOnClick={(cell) => { // Add an onClick handler to update cell data
        cell.correct = true; // Update cell data to mark it as correct
      }}
      style={{ flex: 1 }} // Adjust this value as needed
      theme={{
        gridBackground: '#fff', // Adjust background color
        cellBackground: '#f0f0f0', // Adjust cell background color
        textColor: 'black', // Color of text on Crossword
        numberColor: 'blue', // Color of number on Crossword
        focusBackground: '#ddf', // Adjust focus background color
        highlightBackground: '#FFC1DC', // Adjust highlight background color
      }}
    />
  </div>
  );
}












